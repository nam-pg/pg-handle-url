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

- (IBAction)btnGoToListView:(id)sender {
  [self.appDelegate navigateToListView];
}

//- (void)awakeFromNib {
//    [super awakeFromNib];
//    // Initialization code
//}

@end
