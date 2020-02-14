//
//  EventEmitter.m
//  pg_handle_url
//
//  Created by nam-pg on 2/14/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "EventEmitter.h"
#import <React/RCTLog.h>

@implementation EventEmitter
{
  bool hasListeners;
}


RCT_EXPORT_MODULE(EventEmitter)

/*! @brief Required because we export constantsToExport */
+ (BOOL) requiresMainQueueSetup
{
  return YES;
}

/*!
 * Allows us to write 'EventEmitter.MyEventName' in JavaScript and get 'MyEventValue.
 * Hardcoding 'MyEventValue' in JavaScript would have the same effect.
 */
- (NSDictionary<NSString *, id> *) constantsToExport
{
  return @{@"MyEventName": @"MyEventValue"};
}

- (NSArray <NSString *> *) supportedEvents
{
  return @[@"MyEventValue"];
}

// Will be called when this module's first listener is added.
-(void)startObserving {
    hasListeners = YES;
    // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
    hasListeners = NO;
    // Remove upstream listeners, stop unnecessary background tasks
}


- (void) emitEvent:(NSString *) message
{
  RCTLog(@"emitEvent: %@", message);
  if (hasListeners) {
    [self sendEventWithName:@"MyEventValue" body:message];
  }
}

@end

