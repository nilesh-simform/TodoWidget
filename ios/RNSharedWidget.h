//
//  RNSharedWidget.h
//  TodoWidget
//
//  Created by Nilesh Chavan on 19/04/24.
//


#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

@interface RNSharedWidget : NSObject<RCTBridgeModule>

@end
