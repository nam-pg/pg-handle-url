//
//  PaymentScreen.m
//  pg_handle_url
//
//  Created by nam-pg on 2/14/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridge.h>
#import <UIKit/UINavigationController.h>

#import "PaymentScreen.h"
#import "AppDelegate.h"
#import "EventEmitter.h"

@implementation PaymentScreen
{
  bool hasListeners;
}

- (AppDelegate *) appDelegate {
  return (AppDelegate *) [UIApplication sharedApplication].delegate;
}

- (IBAction)btnGoback:(id)sender {
  [self.appDelegate navigationBack];
}

- (IBAction)btnGobackToWeb:(id)sender {
 
  RCTBridge *reactBridge = [self.appDelegate reactBridge];
   NSLog(@"reactBridge %@", reactBridge.bundleURL);
  EventEmitter *eventEmitter = [reactBridge moduleForName:@"EventEmitter"];
   NSLog(@"btnGobackToWeb %@", eventEmitter);
  [eventEmitter emitEvent:@"WEB"];
  [self.appDelegate navigationBack];
}

//- (void)awakeFromNib {
//    [super awakeFromNib];
//    // Initialization code
//}

@end
