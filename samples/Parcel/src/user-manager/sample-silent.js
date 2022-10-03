import { settings } from "./sample-settings";
import { UserManager } from "oidc-client";
import { Log } from "oidc-client";

import { log } from "./sample";

Log.logger = console;
Log.level = Log.DEBUG;

new UserManager(settings).signinSilentCallback().then(function() {
    log("signin silent callback response success");
}).catch(function(err) {
    console.error(err);
    log(err);
});
