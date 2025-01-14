
import { bech32 } from "bech32";
import { bytesToHex } from "@noble/hashes/utils";
export async function getPubKey(key: string) : Promise<string> {



    if(key.startsWith("npub")) {
        return  getHex(key)
    }

    return ""
}

function getHex(key: string): string {
    return bytesToHex(
        Uint8Array.from(bech32.fromWords(bech32.decode(key).words))
    );
}


