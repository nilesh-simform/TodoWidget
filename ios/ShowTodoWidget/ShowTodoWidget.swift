//
//  ShowTodoWidget.swift
//  ShowTodoWidget
//
//  Created by Nilesh Chavan on 18/04/24.
//

import WidgetKit
import SwiftUI
import Intents

struct Provider: AppIntentTimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
      let valuesData = ValuesData(title: "Your Todo Task", task: "Placeholder Task")
      return SimpleEntry(date: Date(), configuration: ConfigurationAppIntent(), data: valuesData)
    }

    func snapshot(for configuration: ConfigurationAppIntent, in context: Context) async -> SimpleEntry {
      let valuesData = ValuesData(title: "Your Todo Task", task: "No Task Yet")
      return SimpleEntry(date: Date(), configuration: configuration,data: valuesData)
    }
    
    func timeline(for configuration: ConfigurationAppIntent, in context: Context) async -> Timeline<SimpleEntry> {
        var entries: [SimpleEntry] = []
      
      
      let userDefaults = UserDefaults.init(suiteName: "group.usertodos")
//          let jsonText = userDfaults!.value(forKey: "todoWidgetKey") as? String
//          let jsonData = Data(jsonText?.utf8 ?? "".utf8)
//          let valuesData = try! JSONDecoder().decode(ValuesData.self, from: jsonData)
      
            if userDefaults != nil {
             
              if let savedData = userDefaults!.value(forKey: "todoWidgetKey") as? String {
                  let decoder = JSONDecoder()
                let jsonData = Data(savedData.utf8 )
              
                if let parsedData = try? decoder.decode(ValuesData.self, from: jsonData) {
                  let currentDate = Date()
                  for hourOffset in 0 ..< 5 {
                      let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
                    let entry = SimpleEntry(date: entryDate, configuration: configuration, data: parsedData)
                      entries.append(entry)
                  }
                  } else {
                      print("Could not parse data")
                    let currentDate = Date()
                    for hourOffset in 0 ..< 5 {
                      let valuesData = ValuesData(title: "Your Todo Task", task: "No Task Yet")
                        let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
                      let entry = SimpleEntry(date: entryDate, configuration: configuration, data: valuesData)
                        entries.append(entry)
                    }
                  }
              } else {
                let currentDate = Date()
                for hourOffset in 0 ..< 5 {
                  let valuesData = ValuesData(title: "Your Todo Task", task: "No Task Yet")
                    let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
                  let entry = SimpleEntry(date: entryDate, configuration: configuration, data: valuesData)
                    entries.append(entry)
                }

              }
            }
        

            // Generate a timeline consisting of five entries an hour apart, starting from the current date.
         

        return Timeline(entries: entries, policy: .atEnd)
    }
}

struct ValuesData: Codable{
  let title: String
  let task: String
}

struct SimpleEntry: TimelineEntry {
    let date: Date
    let configuration: ConfigurationAppIntent
  let data: ValuesData
}

struct ShowTodoWidgetEntryView : View {
    var entry: Provider.Entry


  var blackColor = Color(UIColor(displayP3Red: 0/255, green: 0/255, blue: 0/255, alpha: 1))
  
  var grayColor = Color(UIColor(displayP3Red: 128/255, green: 128/255, blue: 128/255, alpha: 1))
  
  @Environment(\.widgetFamily) var family

  var body: some View {
    HStack(spacing: 20) {
      VStack(alignment: .leading) {
        Text(entry.data.title).bold().font(.system(size: 18)).foregroundColor(grayColor)
        Text(entry.data.task).bold().font(.system(size: 16)).foregroundColor(blackColor)
      }
    }.padding(.all, 10)
  }
}

struct ShowTodoWidget: Widget {
    let kind: String = "ShowTodoWidget"

    var body: some WidgetConfiguration {
        AppIntentConfiguration(kind: kind, intent: ConfigurationAppIntent.self, provider: Provider()) { entry in
            ShowTodoWidgetEntryView(entry: entry)
                .containerBackground(.fill.tertiary, for: .widget)
        }.configurationDisplayName("Show Todo Widget")
        .description("Display Your Latest Task")
    }
}

extension ConfigurationAppIntent {
    fileprivate static var smiley: ConfigurationAppIntent {
        let intent = ConfigurationAppIntent()
        intent.favoriteEmoji = "😀"
        return intent
    }
    
    fileprivate static var starEyes: ConfigurationAppIntent {
        let intent = ConfigurationAppIntent()
        intent.favoriteEmoji = "🤩"
        return intent
    }
}

#Preview(as: .systemSmall) {
    ShowTodoWidget()
} timeline: {
  let valuesData = ValuesData(title: "Your Todo Task", task: "No Task Yet")
  SimpleEntry(date: .now, configuration: .smiley, data: valuesData)
  SimpleEntry(date: .now, configuration: .starEyes, data: valuesData)
}
