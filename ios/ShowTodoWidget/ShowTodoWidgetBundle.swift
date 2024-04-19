//
//  ShowTodoWidgetBundle.swift
//  ShowTodoWidget
//
//  Created by Nilesh Chavan on 18/04/24.
//

import WidgetKit
import SwiftUI

@main
struct ShowTodoWidgetBundle: WidgetBundle {
    var body: some Widget {
        ShowTodoWidget()
        ShowTodoWidgetLiveActivity()
    }
}
