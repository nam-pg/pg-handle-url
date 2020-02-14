//
//  EventEmitter.h
//  pg_handle_url
//
//  Created by nam-pg on 2/14/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#ifndef EventEmitter_h
#define EventEmitter_h

#import <React/RCTEventEmitter.h>

@interface EventEmitter : RCTEventEmitter <RCTBridgeModule>
- (void) emitEvent:(NSString *) message;
@end

#endif /* EventEmitter_h */
