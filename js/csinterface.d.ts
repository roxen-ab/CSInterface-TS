/**
 * @class CSInterface
 * This is the entry point to the CEP extensibility infrastructure.
 * Instantiate this object and use it to:
 * <ul>
 * <li>Access information about the host application in which an extension is running</li>
 * <li>Launch an extension</li>
 * <li>Register interest in event notifications, and dispatch events</li>
 * </ul>
 *
 */
export declare class CSInterface {
    /**
     * User can add this event listener to handle native application theme color changes.
     * Callback function gives extensions ability to fine-tune their theme color after the
     * global theme color has been changed.
     * The callback function should be like below:
     *
     * @example
     * // event is a CSEvent object, but user can ignore it.
     * function OnAppThemeColorChanged(event)
     * {
     *    // Should get a latest HostEnvironment object from application.
     *    var skinInfo = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo;
     *    // Gets the style information such as color info from the skinInfo,
     *    // and redraw all UI controls of your extension according to the style info.
     * }
     */
    readonly THEME_COLOR_CHANGED_EVENT: string;
    /** The host environment data object. */
    hostEnvironment: any;
    /** Retrieves information about the host environment in which the
     *  extension is currently running.
     *
     *   @return A \c #HostEnvironment object.
     */
    getHostEnvironment(): any;
    /** Closes this extension. */
    closeExtension(): void;
    /**
     * Retrieves a path for which a constant is defined in the system.
     *
     * @param pathType The path-type constant defined in \c #SystemPath ,
     *
     * @return The platform-specific system path string.
     */
    getSystemPath(pathType: string): string;
    /**
     * Evaluates a JavaScript script, which can use the JavaScript DOM
     * of the host application.
     *
     * @param script    The JavaScript script.
     * @param callback  Optional. A callback function that receives the result of execution.
     *          If execution fails, the callback function receives the error message \c EvalScript_ErrMessage.
     */
    evalScript(script: string, callback: (executionResult: any) => void): void;
    /**
     * Retrieves the unique identifier of the application.
     * in which the extension is currently running.
     *
     * @return The unique ID string.
     */
    getApplicationID(): string;
    /**
     * Retrieves host capability information for the application
     * in which the extension is currently running.
     *
     * @return A \c #HostCapabilities object.
     */
    getHostCapabilities(): any;
    /**
     * Triggers a CEP event programmatically. Yoy can use it to dispatch
     * an event of a predefined type, or of a type you have defined.
     *
     * @param event A \c CSEvent object.
     */
    dispatchEvent(event: CSEvent): void;
    /**
     * Registers an interest in a CEP event of a particular type, and
     * assigns an event handler.
     * The event infrastructure notifies your extension when events of this type occur,
     * passing the event object to the registered handler function.
     *
     * @param type     The name of the event type of interest.
     * @param listener The JavaScript handler function or method.
     * @param obj      Optional, the object containing the handler method, if any.
     *         Default is null.
     */
    addEventListener(type: string, listener: any, obj?: any): void;
    /**
     * Removes a registered event listener.
     *
     * @param type      The name of the event type of interest.
     * @param listener  The JavaScript handler function or method that was registered.
     * @param obj       Optional, the object containing the handler method, if any.
     *          Default is null.
     */
    removeEventListener(type: string, listener: any, obj?: any): void;
    /**
     * Loads and launches another extension, or activates the extension if it is already loaded.
     *
     * @param extensionId       The extension's unique identifier.
     * @param startupParams     Not currently used, pass "".
     *
     * @example
     * To launch the extension "help" with ID "HLP" from this extension, call:
     * <code>requestOpenExtension("HLP", ""); </code>
     *
     */
    requestOpenExtension(extensionId: string, params: string): void;
    /**
     * Retrieves the list of extensions currently loaded in the current host application.
     * The extension list is initialized once, and remains the same during the lifetime
     * of the CEP session.
     *
     * @param extensionIds  Optional, an array of unique identifiers for extensions of interest.
     *          If omitted, retrieves data for all extensions.
     *
     * @return Zero or more \c #Extension objects.
     */
    getExtensions(extensionIds: string[]): any;
    /**
     * Retrieves network-related preferences.
     *
     * @return A JavaScript object containing network preferences.
     */
    getNetworkPreferences(): any;
    /**
     * Initializes the resource bundle for this extension with property values
     * for the current application and locale.
     * To support multiple locales, you must define a property file for each locale,
     * containing keyed display-string values for that locale.
     * See localization documentation for Extension Builder and related products.
     *
     * Keys can be in the
     * form <code>key.value="localized string"</code>, for use in HTML text elements.
     * For example, in this input element, the localized \c key.value string is displayed
     * instead of the empty \c value string:
     *
     * <code><input type="submit" value="" data-locale="key"/></code>
     *
     * @return An object containing the resource bundle information.
     */
    initResourceBundle(): any;
    /**
     * Writes installation information to a file.
     *
     * @return The file path.
     */
    dumpInstallationInfo(): string;
    /**
     * Retrieves version information for the current Operating System,
     * See http://www.useragentstring.com/pages/Chrome/ for Chrome \c navigator.userAgent values.
     *
     * @return A string containing the OS version, or "unknown Operation System".
     * If user customizes the User Agent by setting CEF command parameter "--user-agent", only
     * "Mac OS X" or "Windows" will be returned.
     */
    getOSInformation(): string;
    /**
     * Opens a page in the default system browser.
     *
     * Since 4.2.0
     *
     * @param url  The URL of the page/file to open, or the email address.
     * Must use HTTP/HTTPS/file/mailto protocol. For example:
     *   "http://www.adobe.com"
     *   "https://github.com"
     *   "file:///C:/log.txt"
     *   "mailto:test@adobe.com"
     *
     * @return One of these error codes:\n
     *      <ul>\n
     *          <li>NO_ERROR - 0</li>\n
     *          <li>ERR_UNKNOWN - 1</li>\n
     *          <li>ERR_INVALID_PARAMS - 2</li>\n
     *          <li>ERR_INVALID_URL - 201</li>\n
     *      </ul>\n
     */
    openURLInDefaultBrowser(url: string): number;
    /**
     * Retrieves extension ID.
     *
     * Since 4.2.0
     *
     * @return extension ID.
     */
    getExtensionID(): string;
    /**
     * Retrieves the scale factor of screen.
     * On Windows platform, the value of scale factor might be different from operating system's scale factor,
     * since host application may use its self-defined scale factor.
     *
     * Since 4.2.0
     *
     * @return One of the following float number.
     *      <ul>\n
     *          <li> -1.0 when error occurs </li>\n
     *          <li> 1.0 means normal screen </li>\n
     *          <li> >1.0 means HiDPI screen </li>\n
     *      </ul>\n
     */
    getScaleFactor(): number;
    /**
     * Set a handler to detect any changes of scale factor. This only works on Mac.
     *
     * Since 4.2.0
     *
     * @param handler   The function to be called when scale factor is changed.
     *
     */
    setScaleFactorChangedHandler(handler: any): void;
    /**
     * Retrieves current API version.
     *
     * Since 4.2.0
     *
     * @return ApiVersion object.
     *
     */
    getCurrentApiVersion(): any;
    /**
     * Set panel flyout menu by an XML.
     *
     * Since 5.2.0
     *
     * Register a callback function for "com.adobe.csxs.events.flyoutMenuClicked" to get notified when a
     * menu item is clicked.
     * The "data" attribute of event is an object which contains "menuId" and "menuName" attributes.
     *
     * Register callback functions for "com.adobe.csxs.events.flyoutMenuOpened" and "com.adobe.csxs.events.flyoutMenuClosed"
     * respectively to get notified when flyout menu is opened or closed.
     *
     * @param menu     A XML string which describes menu structure.
     * An example menu XML:
     * <Menu>
     *   <MenuItem Id="menuItemId1" Label="TestExample1" Enabled="true" Checked="false"/>
     *   <MenuItem Label="TestExample2">
     *     <MenuItem Label="TestExample2-1" >
     *       <MenuItem Label="TestExample2-1-1" Enabled="false" Checked="true"/>
     *     </MenuItem>
     *     <MenuItem Label="TestExample2-2" Enabled="true" Checked="true"/>
     *   </MenuItem>
     *   <MenuItem Label="---" />
     *   <MenuItem Label="TestExample3" Enabled="false" Checked="false"/>
     * </Menu>
     *
     */
    setPanelFlyoutMenu(menu: string): void;
    /**
     * Updates a menu item in the extension window's flyout menu, by setting the enabled
     * and selection status.
     *
     * Since 5.2.0
     *
     * @param menuItemLabel    The menu item label.
     * @param enabled        True to enable the item, false to disable it (gray it out).
     * @param checked        True to select the item, false to deselect it.
     *
     * @return false when the host application does not support this functionality (HostCapabilities.EXTENDED_PANEL_MENU is false).
     *         Fails silently if menu label is invalid.
     *
     * @see HostCapabilities.EXTENDED_PANEL_MENU
     */
    updatePanelMenuItem(menuItemLabel: string, enabled: boolean, checked: boolean): boolean;
    /**
     * Set context menu by XML string.
     *
     * Since 5.2.0
     *
     * There are a number of conventions used to communicate what type of menu item to create and how it should be handled.
     * - an item without menu ID or menu name is disabled and is not shown.
     * - if the item name is "---" (three hyphens) then it is treated as a separator. The menu ID in this case will always be NULL.
     * - Checkable attribute takes precedence over Checked attribute.
     * - a PNG icon. For optimal display results please supply a 16 x 16px icon as larger dimensions will increase the size of the menu item.
     The Chrome extension contextMenus API was taken as a reference.
     https://developer.chrome.com/extensions/contextMenus
     * - the items with icons and checkable items cannot coexist on the same menu level. The former take precedences over the latter.
     *
     * @param menu      A XML string which describes menu structure.
     * @param callback  The callback function which is called when a menu item is clicked. The only parameter is the returned ID of clicked menu item.
     *
     * @description An example menu XML:
     * <Menu>
     *   <MenuItem Id="menuItemId1" Label="TestExample1" Enabled="true" Checkable="true" Checked="false" Icon="./image/small_16X16.png"/>
     *   <MenuItem Id="menuItemId2" Label="TestExample2">
     *     <MenuItem Id="menuItemId2-1" Label="TestExample2-1" >
     *       <MenuItem Id="menuItemId2-1-1" Label="TestExample2-1-1" Enabled="false" Checkable="true" Checked="true"/>
     *     </MenuItem>
     *     <MenuItem Id="menuItemId2-2" Label="TestExample2-2" Enabled="true" Checkable="true" Checked="true"/>
     *   </MenuItem>
     *   <MenuItem Label="---" />
     *   <MenuItem Id="menuItemId3" Label="TestExample3" Enabled="false" Checkable="true" Checked="false"/>
     * </Menu>
     */
    setContextMenu(menu: string, callback: (clikedMenuId: string) => {}): void;
    /**
     * Set context menu by JSON string.
     *
     * Since 6.0.0
     *
     * There are a number of conventions used to communicate what type of menu item to create and how it should be handled.
     * - an item without menu ID or menu name is disabled and is not shown.
     * - if the item label is "---" (three hyphens) then it is treated as a separator. The menu ID in this case will always be NULL.
     * - Checkable attribute takes precedence over Checked attribute.
     * - a PNG icon. For optimal display results please supply a 16 x 16px icon as larger dimensions will increase the size of the menu item.
     The Chrome extension contextMenus API was taken as a reference.
     * - the items with icons and checkable items cannot coexist on the same menu level. The former take precedences over the latter.
     https://developer.chrome.com/extensions/contextMenus
     *
     * @param menu      A JSON string which describes menu structure.
     * @param callback  The callback function which is called when a menu item is clicked. The only parameter is the returned ID of clicked menu item.
     *
     * @description An example menu JSON:
     *
     * {
     *      "menu": [
     *          {
     *              "id": "menuItemId1",
     *              "label": "testExample1",
     *              "enabled": true,
     *              "checkable": true,
     *              "checked": false,
     *              "icon": "./image/small_16X16.png"
     *          },
     *          {
     *              "id": "menuItemId2",
     *              "label": "testExample2",
     *              "menu": [
     *                  {
     *                      "id": "menuItemId2-1",
     *                      "label": "testExample2-1",
     *                      "menu": [
     *                          {
     *                              "id": "menuItemId2-1-1",
     *                              "label": "testExample2-1-1",
     *                              "enabled": false,
     *                              "checkable": true,
     *                              "checked": true
     *                          }
     *                      ]
     *                  },
     *                  {
     *                      "id": "menuItemId2-2",
     *                      "label": "testExample2-2",
     *                      "enabled": true,
     *                      "checkable": true,
     *                      "checked": true
     *                  }
     *              ]
     *          },
     *          {
     *              "label": "---"
     *          },
     *          {
     *              "id": "menuItemId3",
     *              "label": "testExample3",
     *              "enabled": false,
     *              "checkable": true,
     *              "checked": false
     *          }
     *      ]
     *  }
     *
     */
    setContextMenuByJSON(menu: string, callback: (clikedMenuId: string) => {}): void;
    /**
     * Updates a context menu item by setting the enabled and selection status.
     *
     * Since 5.2.0
     *
     * @param menuItemID    The menu item ID.
     * @param enabled        True to enable the item, false to disable it (gray it out).
     * @param checked        True to select the item, false to deselect it.
     */
    updateContextMenuItem(menuItemID: string, enabled: boolean, checked: boolean): void;
    /**
     * Get the visibility status of an extension window.
     *
     * Since 6.0.0
     *
     * @return true if the extension window is visible; false if the extension window is hidden.
     */
    isWindowVisible(): boolean;
    /**
     * Resize extension's content to the specified dimensions.
     * 1. Works with modal and modeless extensions in all Adobe products.
     * 2. Extension's manifest min/max size constraints apply and take precedence.
     * 3. For panel extensions
     *    3.1 This works in all Adobe products except:
     *        * Premiere Pro
     *        * Prelude
     *        * After Effects
     *    3.2 When the panel is in certain states (especially when being docked),
     *        it will not change to the desired dimensions even when the
     *        specified size satisfies min/max constraints.
     *
     * Since 6.0.0
     *
     * @param width  The new width
     * @param height The new height
     */
    resizeContent(width: number, height: number): void;
    /**
     * Register the invalid certificate callback for an extension.
     * This callback will be triggered when the extension tries to access the web site that contains the invalid certificate on the main frame.
     * But if the extension does not call this function and tries to access the web site containing the invalid certificate, a default error page will be shown.
     *
     * Since 6.1.0
     *
     * @param callback the callback function
     */
    registerInvalidCertificateCallback(callback: any): any;
    /**
     * Register an interest in some key events to prevent them from being sent to the host application.
     *
     * This function works with modeless extensions and panel extensions.
     * Generally all the key events will be sent to the host application for these two extensions if the current focused element
     * is not text input or dropdown,
     * If you want to intercept some key events and want them to be handled in the extension, please call this function
     * in advance to prevent them being sent to the host application.
     *
     * Since 6.1.0
     *
     * @param keyEventsInterest      A JSON string describing those key events you are interested in. A null object or
     an empty string will lead to removing the interest
     *
     * This JSON string should be an array, each object has following keys:
     *
     * keyCode:  [Required] represents an OS system dependent virtual key code identifying
     *           the unmodified value of the pressed key.
     * ctrlKey:  [optional] a Boolean that indicates if the control key was pressed (true) or not (false) when the event occurred.
     * altKey:   [optional] a Boolean that indicates if the alt key was pressed (true) or not (false) when the event occurred.
     * shiftKey: [optional] a Boolean that indicates if the shift key was pressed (true) or not (false) when the event occurred.
     * metaKey:  [optional] (Mac Only) a Boolean that indicates if the Meta key was pressed (true) or not (false) when the event occurred.
     *                      On Macintosh keyboards, this is the command key. To detect Windows key on Windows, please use keyCode instead.
     * An example JSON string:
     *
     * [
     *     {
     *         "keyCode": 48
     *     },
     *     {
     *         "keyCode": 123,
     *         "ctrlKey": true
     *     },
     *     {
     *         "keyCode": 123,
     *         "ctrlKey": true,
     *         "metaKey": true
     *     }
     * ]
     *
     */
    registerKeyEventsInterest(keyEventsInterest: string): any;
    /**
     * Set the title of the extension window.
     * This function works with modal and modeless extensions in all Adobe products, and panel extensions in Photoshop, InDesign, InCopy, Illustrator, Flash Pro and Dreamweaver.
     *
     * Since 6.1.0
     *
     * @param title The window title.
     */
    setWindowTitle(title: string): void;
    /**
     * Get the title of the extension window.
     * This function works with modal and modeless extensions in all Adobe products, and panel extensions in Photoshop, InDesign, InCopy, Illustrator, Flash Pro and Dreamweaver.
     *
     * Since 6.1.0
     *
     * @return The window title.
     */
    getWindowTitle(): string;
}
/**
 * Class CSEvent.
 * You can use it to dispatch a standard CEP event.
 *
 * @return CSEvent object
 */
export declare class CSEvent {
    type: string;
    scope: string;
    appId: string;
    extensionId: string;
    /**
     * Initializes new instance of CSEvent object.
     * You can use it to dispatch a standard CEP event.
     *
     * @param type        Event type.
     * @param scope       The scope of event, can be "GLOBAL" or "APPLICATION".
     * @param appId       The unique identifier of the application that generated the event. Optional.
     * @param extensionId The unique identifier of the extension that generated the event. Optional.
     */
    constructor(type: string, scope: string, appId: string, extensionId: string);
    /**
     * Event-specific data.
     */
    data: string;
}
/**
 * @class SystemPath
 * Stores operating-system-specific location constants for use in the
 * \c #CSInterface.getSystemPath() method.
 */
export declare class SystemPath {
    /** The path to user data.  */
    static readonly USER_DATA: string;
    /** The path to common files for Adobe applications.  */
    static readonly COMMON_FILES: string;
    /** The path to the user's default document folder.  */
    static readonly MY_DOCUMENTS: string;
    /** @deprecated. Use \c #SystemPath.Extension.  */
    static readonly APPLICATION: string;
    /** The path to current extension.  */
    static readonly EXTENSION: string;
    /** The path to hosting application's executable.  */
    static readonly HOST_APPLICATION: string;
}
/**
 * @class ColorType
 * Stores color-type constants.
 */
export declare class ColorType {
    /** RGB color type. */
    static readonly RGB: string;
    /** Gradient color type. */
    static readonly GRADIENT: string;
    /** Null color type. */
    static readonly NONE: string;
}
/**
 * @class RGBColor
 * Stores an RGB color with red, green, blue, and alpha values.
 * All values are in the range [0.0 to 255.0]. Invalid numeric values are
 * converted to numbers within this range.
 *
 */
export declare class RGBColor {
    red: number;
    green: number;
    blue: number;
    alpha: number;
    /**
     * Stores an RGB color with red, green, blue, and alpha values.
     * All values are in the range [0.0 to 255.0]. Invalid numeric values are
     * converted to numbers within this range.
     *
     * @param red   The red value, in the range [0.0 to 255.0].
     * @param green The green value, in the range [0.0 to 255.0].
     * @param blue  The blue value, in the range [0.0 to 255.0].
     * @param alpha The alpha (transparency) value, in the range [0.0 to 255.0].
     *      The default, 255.0, means that the color is fully opaque.
     */
    constructor(red: number, green: number, blue: number, alpha: number);
}
/**
 * @class Direction
 * A point value  in which the y component is 0 and the x component
 * is positive or negative for a right or left direction,
 * or the x component is 0 and the y component is positive or negative for
 * an up or down direction.
 */
export declare class Direction {
    x: number;
    y: number;
    /**
     * A point value  in which the y component is 0 and the x component
     * is positive or negative for a right or left direction,
     * or the x component is 0 and the y component is positive or negative for
     * an up or down direction.
     *
     * @param x     The horizontal component of the point.
     * @param y     The vertical component of the point.
     */
    constructor(x: number, y: number);
}
/**
 * @class GradientStop
 * Stores gradient stop information.
 */
export declare class GradientStop {
    offset: number;
    rgbColor: RGBColor;
    /**
     * Stores gradient stop information.
     *
     * @param offset   The offset of the gradient stop, in the range [0.0 to 1.0].
     * @param rgbColor The color of the gradient at this point, an \c #RGBColor object.
     */
    constructor(offset: number, rgbColor: RGBColor);
}
/**
 * @class GradientColor
 * Stores gradient color information.
 */
export declare class GradientColor {
    type: string;
    direction: Direction;
    numStops: number;
    arrGradientStop: GradientStop[];
    /**
     * Initializes new \c #GradientColor instance.
     *
     * @param type          The gradient type, must be "linear".
     * @param direction     A \c #Direction object for the direction of the gradient
     (up, down, right, or left).
     * @param numStops          The number of stops in the gradient.
     * @param gradientStopList  An array of \c #GradientStop objects.
     */
    constructor(type: string, direction: Direction, numStops: number, arrGradientStop: GradientStop[]);
}
/**
 * @class UIColor
 * Stores color information, including the type, anti-alias level, and specific color
 * values in a color object of an appropriate type.
 */
export declare class UIColor {
    /**
     * Stores color information, including the type, anti-alias level, and specific color
     * values in a color object of an appropriate type.
     *
     * @param type          The color type, 1 for "rgb" and 2 for "gradient".
     The supplied color object must correspond to this type.
     * @param antialiasLevel    The anti-alias level constant.
     * @param color         A \c #RGBColor or \c #GradientColor object containing specific color information.
     */
    constructor(type?: number, antialiasLevel?: any, color?: RGBColor | GradientColor);
    /**
     * The color type, 1 for "rgb" and 2 for "gradient".
     * The supplied color object must correspond to this type.
     */
    type: number;
    /**
     * The anti-alias level constant.
     */
    antialiasLevel: any;
    /**
     * A \c #RGBColor or \c #GradientColor object containing specific color information.
     */
    color: RGBColor | GradientColor;
}
/**
 * @class AppSkinInfo
 * Stores window-skin properties, such as color and font. All color parameter values are \c #UIColor objects except that systemHighlightColor is \c #RGBColor object.
 */
export declare class AppSkinInfo {
    baseFontFamily: string;
    baseFontSize: number;
    appBarBackgroundColor: UIColor;
    panelBackgroundColor: UIColor;
    appBarBackgroundColorSRGB: UIColor;
    panelBackgroundColorSRGB: UIColor;
    systemHighlightColor: UIColor;
    /**
     * Stores window-skin properties, such as color and font. All color parameter values are \c #UIColor objects except that systemHighlightColor is \c #RGBColor object.
     *
     * @param baseFontFamily        The base font family of the application.
     * @param baseFontSize          The base font size of the application.
     * @param appBarBackgroundColor     The application bar background color.
     * @param panelBackgroundColor      The background color of the extension panel.
     * @param appBarBackgroundColorSRGB     The application bar background color, as sRGB.
     * @param panelBackgroundColorSRGB      The background color of the extension panel, as sRGB.
     * @param systemHighlightColor          The operating-system highlight color, as sRGB.
     */
    constructor(baseFontFamily: string, baseFontSize: number, appBarBackgroundColor: UIColor, panelBackgroundColor: UIColor, appBarBackgroundColorSRGB: UIColor, panelBackgroundColorSRGB: UIColor, systemHighlightColor: UIColor);
}
/**
 * @class HostEnvironment
 * Stores information about the environment in which the extension is loaded.
 */
export declare class HostEnvironment {
    appName: string;
    appVersion: any;
    appLocale: any;
    appUILocale: any;
    appId: string;
    isAppOnline: boolean;
    appSkinInfo: AppSkinInfo;
    /**
     * Stores information about the environment in which the extension is loaded.
     *
     * @param appName   The application's name.
     * @param appVersion    The application's version.
     * @param appLocale The application's current license locale.
     * @param appUILocale   The application's current UI locale.
     * @param appId     The application's unique identifier.
     * @param isAppOnline  True if the application is currently online.
     * @param appSkinInfo   An \c #AppSkinInfo object containing the application's default color and font styles.
     */
    constructor(appName: string, appVersion: any, appLocale: any, appUILocale: any, appId: string, isAppOnline: boolean, appSkinInfo: AppSkinInfo);
}
/**
 * @class HostCapabilities
 * Stores information about the host capabilities.
 */
export declare class HostCapabilities {
    EXTENDED_PANEL_MENU: boolean;
    EXTENDED_PANEL_ICONS: boolean;
    DELEGATE_APE_ENGINE: boolean;
    SUPPORT_HTML_EXTENSIONS: boolean;
    DISABLE_FLASH_EXTENSIONS: boolean;
    /**
     * Stores information about the host capabilities.
     *
     * @param EXTENDED_PANEL_MENU True if the application supports panel menu.
     * @param EXTENDED_PANEL_ICONS True if the application supports panel icon.
     * @param DELEGATE_APE_ENGINE True if the application supports delegated APE engine.
     * @param SUPPORT_HTML_EXTENSIONS True if the application supports HTML extensions.
     * @param DISABLE_FLASH_EXTENSIONS True if the application disables FLASH extensions.
     */
    constructor(EXTENDED_PANEL_MENU: boolean, EXTENDED_PANEL_ICONS: boolean, DELEGATE_APE_ENGINE: boolean, SUPPORT_HTML_EXTENSIONS: boolean, DISABLE_FLASH_EXTENSIONS: boolean);
}
/**
 * @class ApiVersion
 * Stores current api version.
 *
 * Since 4.2.0
 */
export declare class ApiVersion {
    major: number;
    minor: number;
    micro: number;
    /**
     * Stores current api version.
     *
     * Since 4.2.0
     *
     * @param major  The major version.
     * @param minor  The minor version.
     * @param micro  The micro version.
     */
    constructor(major: number, minor: number, micro: number);
}
/**
 * @class MenuItemStatus
 * Stores flyout menu item status
 *
 * Since 5.2.0
 */
export declare class MenuItemStatus {
    menuItemLabel: string;
    enabled: boolean;
    checked: boolean;
    /**
     * Stores flyout menu item status
     *
     * Since 5.2.0
     *
     * @param menuItemLabel  The menu item label.
     * @param enabled  		 True if user wants to enable the menu item.
     * @param checked  		 True if user wants to check the menu item.
     */
    constructor(menuItemLabel: string, enabled: boolean, checked: boolean);
}
/**
 * @class ContextMenuItemStatus
 * Stores the status of the context menu item.
 *
 * Since 5.2.0
 */
export declare class ContextMenuItemStatus {
    menuItemID: string;
    enabled: boolean;
    checked: boolean;
    /**
     * Stores the status of the context menu item.
     *
     * Since 5.2.0
     *
     * @param menuItemID     The menu item id.
     * @param enabled  		 True if user wants to enable the menu item.
     * @param checked  		 True if user wants to check the menu item.
     */
    constructor(menuItemID: string, enabled: boolean, checked: boolean);
}