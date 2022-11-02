import Contract from "./Contract";
import Artifacts from "./AuthBank.json";

class AuthBank extends Contract {
    constructor(options, address) {
        super(options, "AuthBank", Artifacts["abi"], address);
    }
}

export default AuthBank;