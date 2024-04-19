//
//  ShowTodoWidgetLiveActivity.swift
//  ShowTodoWidget
//
//  Created by Nilesh Chavan on 18/04/24.
//

import ActivityKit
import WidgetKit
import SwiftUI

struct ShowTodoWidgetAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        // Dynamic stateful properties about your activity go here!
        var emoji: String
    }

    // Fixed non-changing properties about your activity go here!
    var name: String
}

struct ShowTodoWidgetLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: ShowTodoWidgetAttributes.self) { context in
            // Lock screen/banner UI goes here
            VStack {
                Text("Hello \(context.state.emoji)")
            }
            .activityBackgroundTint(Color.cyan)
            .activitySystemActionForegroundColor(Color.black)

        } dynamicIsland: { context in
            DynamicIsland {
                // Expanded UI goes here.  Compose the expanded UI through
                // various regions, like leading/trailing/center/bottom
                DynamicIslandExpandedRegion(.leading) {
                    Text("Leading")
                }
                DynamicIslandExpandedRegion(.trailing) {
                    Text("Trailing")
                }
                DynamicIslandExpandedRegion(.bottom) {
                    Text("Bottom \(context.state.emoji)")
                    // more content
                }
            } compactLeading: {
                Text("L")
            } compactTrailing: {
                Text("T \(context.state.emoji)")
            } minimal: {
                Text(context.state.emoji)
            }
            .widgetURL(URL(string: "http://www.apple.com"))
            .keylineTint(Color.red)
        }
    }
}

extension ShowTodoWidgetAttributes {
    fileprivate static var preview: ShowTodoWidgetAttributes {
        ShowTodoWidgetAttributes(name: "World")
    }
}

extension ShowTodoWidgetAttributes.ContentState {
    fileprivate static var smiley: ShowTodoWidgetAttributes.ContentState {
        ShowTodoWidgetAttributes.ContentState(emoji: "😀")
     }
     
     fileprivate static var starEyes: ShowTodoWidgetAttributes.ContentState {
         ShowTodoWidgetAttributes.ContentState(emoji: "🤩")
     }
}

#Preview("Notification", as: .content, using: ShowTodoWidgetAttributes.preview) {
   ShowTodoWidgetLiveActivity()
} contentStates: {
    ShowTodoWidgetAttributes.ContentState.smiley
    ShowTodoWidgetAttributes.ContentState.starEyes
}
