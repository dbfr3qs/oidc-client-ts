import { settings } from "./sample-settings";
import { log } from "./sample";
import { UserManager } from "oidc-client";
import { Log } from "oidc-client";

Log.logger = console;
Log.level = Log.DEBUG;

new UserManager(settings).signoutPopupCallback(undefined, true).then(function() {
    log("signout popup callback response success");
}).catch(function(err) {
    console.error(err);
    log(err);
});
