// Objective-C API for talking to github.com/Bit-Nation/panthalassa Go package.
//   gobind -lang=objc github.com/Bit-Nation/panthalassa
//
// File is generated by gobind. Do not edit.

#ifndef __Panthalassa_H__
#define __Panthalassa_H__

@import Foundation;
#include "Universe.objc.h"


@class PanthalassaPanthalassa;

@interface PanthalassaPanthalassa : NSObject <goSeqRefInterface> {
}
@property(strong, readonly) id _ref;

- (instancetype)initWithRef:(id)ref;
- (instancetype)init:(NSString*)encryptedAccount pw:(NSString*)pw;
- (NSString*)ethereumPrivateKey:(NSError**)error;
- (NSString*)export:(NSString*)pw pwConfirm:(NSString*)pwConfirm error:(NSError**)error;
- (BOOL)stop:(NSError**)error;
@end

FOUNDATION_EXPORT NSString* PanthalassaNewAccountKeys(NSString* pw, NSString* pwConfirm, NSError** error);

FOUNDATION_EXPORT NSString* PanthalassaNewAccountKeysFromMnemonic(NSString* mnemonic, NSString* pw, NSString* pwConfirm, NSError** error);

FOUNDATION_EXPORT PanthalassaPanthalassa* PanthalassaNewPanthalassa(NSString* encryptedAccount, NSString* pw, NSError** error);

FOUNDATION_EXPORT NSString* PanthalassaScryptDecrypt(NSString* data, NSString* pw, NSError** error);

FOUNDATION_EXPORT NSString* PanthalassaScryptEncrypt(NSString* data, NSString* pw, NSString* pwConfirm, NSError** error);

#endif
