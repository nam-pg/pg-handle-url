//
//  PGNavigationModule.m
//  pg_handle_url
//
//  Created by nam-pg on 2/14/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import "PGNavigation.h"
#import <React/RCTLog.h>
#import "AppDelegate.h"
#import "PaymentScreen.h"


@implementation PGNavigation

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(navigate:(NSString *)path)
{
  RCTLog(@"navigate: %@", path);
  dispatch_async(dispatch_get_main_queue(), ^{
    AppDelegate *appDelegate = (AppDelegate *) [UIApplication sharedApplication].delegate;
    [appDelegate navigateToView];
  });
}

@end

