
import { bech32 } from "bech32";
import { bytesToHex,  } from "@noble/hashes/utils";
import {getPublicKey, } from "nostr-tools";
import * as secp from "@noble/secp256k1";

export async function getPubKey(key: string) : Promise<string>  {

    if(key.startsWith("npub")) {
        return getHex(key)
    }
    
    if(key.startsWith("nsec")) {
        let privateKey = getHex(key)
        if(secp.utils.isValidPrivateKey(privateKey)) {
            return getPublicKey(hexToUint8Array(privateKey))
        }
      }

    if(secp.utils.isValidPrivateKey(key)) {
        return getPublicKey(hexToUint8Array(getHex(key)))
    }
    throw new Error("Invalid key provided")
}

function getHex(key: string): string {
    return bytesToHex(
        Uint8Array.from(bech32.fromWords(bech32.decode(key).words))
    );
}

function hexToUint8Array(hex: string): Uint8Array {
    if (hex.length % 2 !== 0) {
        throw new Error("Invalid hex string");
    }

    const array = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        array[i / 2] = parseInt(hex.substring(i, i + 2), 16);
    }

    return array;
}


