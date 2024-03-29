import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, Inject, Directive, Input, HostListener, ElementRef, Pipe, EventEmitter, Output, NgModule, ChangeDetectionStrategy, ChangeDetectorRef, Optional, ViewChild } from '@angular/core';
import cloneDeep from 'lodash/cloneDeep';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError, Subject, of, merge } from 'rxjs';
import { catchError, tap, shareReplay, switchMap, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatSnackBar, MatAutocomplete, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule, MatButtonToggleModule, MatChipsModule, MatBadgeModule, MatSlideToggleModule, MatCardModule, MatMenuModule, MatDividerModule, MatProgressSpinnerModule, MatRadioModule, MatCheckboxModule, MatGridListModule, MatTooltipModule, MatExpansionModule, MatSelectModule, MatDatepickerModule, MatProgressBarModule, MatSliderModule, MatStepperModule, MatDialogModule, MatTabsModule, MatNativeDateModule, MatSnackBarModule, MatTableModule, MatPaginatorModule, MatSortModule, MatAutocompleteModule, MatTreeModule, MatAutocompleteTrigger, MatPaginatorIntl } from '@angular/material';
import { NgForm, NgModel, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatDialog as MatDialog$1 } from '@angular/material/dialog';
import { MatSnackBar as MatSnackBar$1 } from '@angular/material/snack-bar';
import { DecimalPipe, DatePipe, CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * Generated from: shared/extensions/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class Utils {
    /**
     * @param {?} value
     * @return {?}
     */
    static isNullEmptyOrUndefined(value) {
        return value === null || value === '' || typeof value === 'undefined' || value === 'null';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static isNumber(value) {
        return typeof value === 'number' && isFinite(value);
    }
    /**
     * @param {?} source
     * @return {?}
     */
    static deepClone(source) {
        return cloneDeep(source);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    static trimLastComma(str) {
        str = str.replace(/,\s*$/, '');
        return str;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    static trimLastSlash(str) {
        return str.replace(/\/$/, '');
    }
    /**
     * @param {?} key
     * @param {?} array
     * @return {?}
     */
    static sum(key, array) {
        return array.reduce((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a + (b[key] || 0)), 0);
    }
    /**
     * @return {?}
     */
    static newTechnicalNumber() {
        // tslint:disable-next-line: only-arrow-functions
        return 'xxxxxxxx'.replace(/[xy]/g, (/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            // tslint:disable:one-variable-per-declaration
            // tslint:disable: no-bitwise
            /** @type {?} */
            const r = Math.random() * 16 | 0;
            /** @type {?} */
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }));
    }
    /**
     * @param {?} regex
     * @param {?} testString
     * @return {?}
     */
    static regexMatch(regex, testString) {
        /** @type {?} */
        const exc = regex.exec(testString);
        if (exc !== null && exc.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x === testString)) !== null)
            return true;
        else
            return false;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    delayInit() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                resolve();
            }), 10);
        }));
    }
    /**
     * @param {?} config
     * @return {?}
     */
    getConfiguration(config) {
        return this.http.get(`${config.apiUrl}/${config.getConfigEndpoint}`).toPromise()
            .then((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.configurations = response;
            // environment.configuration = this.configurations;
            return this.configurations;
        })).catch((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            // if (environment.production)
            //   return Promise.reject(err);
            // else {
            //   this.configurations = environment.configuration;
            //   return Promise.resolve(environment.configuration);
            // }
        }));
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.configurations;
    }
}
ConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ConfigService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ ConfigService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(ɵɵinject(HttpClient)); }, token: ConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.configurations;
    /**
     * @type {?}
     * @private
     */
    ConfigService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/api.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ApiService {
    /**
     * @param {?} http
     * @param {?} configService
     */
    constructor(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    formatErrors(error) {
        console.error(error);
        return throwError(error.error);
    }
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} params
     * @return {?}
     */
    get(zone, path, params = new HttpParams()) {
        return this.http.get(`${this.getApiUrl()}/${zone}/${path}`, { params })
            .pipe(catchError(this.formatErrors));
    }
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} body
     * @return {?}
     */
    put(zone, path, body = {}) {
        return this.http.put(`${this.getApiUrl()}${zone}/${path}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
    }
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} id
     * @param {?=} body
     * @param {?=} withCredentials
     * @return {?}
     */
    post(zone, path, id, body = {}, withCredentials = false) {
        if (id !== undefined)
            id = '/' + id;
        else
            id = '';
        /** @type {?} */
        let withCr;
        if (withCredentials === true)
            withCr = { withCredentials: true };
        return this.http.post(`${this.getApiUrl()}/${zone}/${path}${id}`, JSON.stringify(body), withCr).pipe(catchError(this.formatErrors));
    }
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?=} id
     * @param {?=} body
     * @param {?=} withCredentials
     * @param {?=} reportProgress
     * @return {?}
     */
    postFile(zone, path, id, body = {}, withCredentials = false, reportProgress) {
        if (id !== undefined)
            id = '/' + id;
        else
            id = '';
        /** @type {?} */
        let withCr;
        if (withCredentials === true)
            withCr = { withCredentials: true };
        if (reportProgress === undefined)
            reportProgress == false;
        return this.http.post(`${this.getApiUrl()}/${zone}/${path}${id}`, body, { withCredentials: withCr, reportProgress: reportProgress, observe: 'events' }).pipe(catchError(this.formatErrors));
    }
    /**
     * @param {?} zone
     * @param {?} path
     * @return {?}
     */
    delete(zone, path) {
        return this.http.delete(`${this.getApiUrl()}/${zone}/${path}`).pipe(catchError(this.formatErrors));
    }
    /**
     * @param {?} zone
     * @param {?} path
     * @param {?} file
     * @param {?=} typeName
     * @param {?=} parentObjectId
     * @return {?}
     */
    uploadFile(zone, path, file, typeName, parentObjectId) {
        /** @type {?} */
        const formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(`${this.configService.getConfig().apiUrl}/${zone}/${path}/${typeName}/${parentObjectId}`, formData);
    }
    /**
     * @return {?}
     */
    getApiUrl() {
        return this.configService.getConfig().apiUrl;
    }
}
ApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: ConfigService }
];
/** @nocollapse */ ApiService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(ɵɵinject(HttpClient), ɵɵinject(ConfigService)); }, token: ApiService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.configService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/translation.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslationKeyContract {
}
if (false) {
    /** @type {?} */
    TranslationKeyContract.prototype.key;
    /** @type {?} */
    TranslationKeyContract.prototype.value;
}
class TranslationService {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
        this.translations = {};
        this.cultureChange = new Subject();
    }
    /**
     * @param {?} code
     * @return {?}
     */
    setCultureCode(code) {
        this._cultureCode = code;
        this.cultureCode = Date.now();
    }
    /**
     * @return {?}
     */
    getCultureCode() {
        return this._cultureCode;
    }
    /**
     * @param {?=} cultureCode
     * @return {?}
     */
    getTranslations(cultureCode) {
        /** @type {?} */
        let params = new HttpParams();
        if (cultureCode !== undefined)
            params = params.append('cultureCode', cultureCode);
        return this.apiService.get('common', 'getTranslations', params).pipe(tap((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            /** @type {?} */
            const keyarray = [];
            for (let index = 0; index < x.value.length; index++) {
                /** @type {?} */
                const element = x.value[index];
                keyarray.push({ key: element.key, value: element.value });
            }
            this.setTranslations(keyarray);
            this.cultureChange.next();
            this.cultureCode = Date.now();
        })));
    }
    /**
     * @param {?} trans
     * @return {?}
     */
    setTranslations(trans) {
        this.translations = {};
        for (let index = 0; index < trans.length; index++) {
            /** @type {?} */
            const element = trans[index];
            this.translations[element.key] = element.value;
        }
        localStorage.setItem('translations', JSON.stringify(this.translations));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getForKey(key) {
        /** @type {?} */
        let res = key;
        if (Utils.isNullEmptyOrUndefined(key) || key === '-')
            return key;
        /** @type {?} */
        const r = this.translations[key];
        if (!Utils.isNullEmptyOrUndefined(r))
            res = r;
        else {
            console.log(key);
            this.translations[key] = '[' + key + ']';
            res = '[' + key + ']';
        }
        return res;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getForKeyByObject(key) {
        /** @type {?} */
        let res = key;
        if (Utils.isNullEmptyOrUndefined(key) || key === '-')
            return key;
        /** @type {?} */
        const r = this.translations[key];
        if (!Utils.isNullEmptyOrUndefined(r))
            res = r;
        else {
            /** @type {?} */
            const newKey = key.split('_')[1];
            /** @type {?} */
            const keyValue = this.translations[newKey];
            res = keyValue;
        }
        return res;
    }
    /**
     * @return {?}
     */
    loadStorage() {
        /** @type {?} */
        const local = localStorage.getItem('translations');
        if (local !== undefined && local !== null) {
            /** @type {?} */
            const obj = JSON.parse(local);
            this.translations = obj;
        }
    }
}
TranslationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TranslationService.ctorParameters = () => [
    { type: ApiService }
];
/** @nocollapse */ TranslationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function TranslationService_Factory() { return new TranslationService(ɵɵinject(ApiService)); }, token: TranslationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslationService.prototype.translations;
    /** @type {?} */
    TranslationService.prototype.cultureCode;
    /**
     * @type {?}
     * @private
     */
    TranslationService.prototype._cultureCode;
    /** @type {?} */
    TranslationService.prototype.cultureChange;
    /**
     * @type {?}
     * @private
     */
    TranslationService.prototype.apiService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/confirm-dialog/confirm-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IConfirmDialogData() { }
if (false) {
    /** @type {?} */
    IConfirmDialogData.prototype.title;
    /** @type {?} */
    IConfirmDialogData.prototype.text;
    /** @type {?} */
    IConfirmDialogData.prototype.translatedText;
    /** @type {?} */
    IConfirmDialogData.prototype.confirmLabel;
    /** @type {?} */
    IConfirmDialogData.prototype.cancelLabel;
    /** @type {?} */
    IConfirmDialogData.prototype.action;
    /** @type {?} */
    IConfirmDialogData.prototype.parameters;
}
class ConfirmDialogComponent {
    /**
     * @param {?} data
     * @param {?} dialogRef
     * @param {?} translateService
     */
    constructor(data, dialogRef, translateService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.translateService = translateService;
    }
    /**
     * @return {?}
     */
    get showText() {
        return !Utils.isNullEmptyOrUndefined(this.data.text);
    }
    /**
     * @return {?}
     */
    get showTranslatedText() {
        return !Utils.isNullEmptyOrUndefined(this.data.translatedText);
    }
    /**
     * @return {?}
     */
    get showOkButton() {
        return !Utils.isNullEmptyOrUndefined(this.data.confirmLabel);
    }
    /**
     * @return {?}
     */
    get showCloseButton() {
        return !Utils.isNullEmptyOrUndefined(this.data.cancelLabel);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ok() {
        if (this.data.action !== undefined)
            this.data.action(this.data.parameters);
        this.dialogRef.close(true);
    }
    /**
     * @return {?}
     */
    close() {
        this.dialogRef.close();
    }
}
ConfirmDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-confirm-dialog',
                template: "<div mat-dialog-title>\r\n  {{data.title | translate: translateService.cultureCode}}\r\n</div>\r\n<div mat-dialog-content>\r\n  <mat-card>\r\n    <mat-card-content>\r\n      <div *ngIf=\"showText\">\r\n        {{data.text | translate: translateService.cultureCode}}\r\n      </div>\r\n      <div *ngIf=\"showTranslatedText\">\r\n        {{data.translatedText}}\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n<div mat-dialog-actions class=\"m-t-10\">\r\n  <span fxFlex></span>\r\n  <button mat-raised-button color=\"accent\" class=\"cancelBtn\" (click)=\"close()\" *ngIf=\"showCloseButton\">{{data.cancelLabel | translate: translateService.cultureCode}}</button>\r\n  <button mat-raised-button color=\"primary\" class=\"doneBtn\" (click)=\"ok()\" *ngIf=\"showOkButton\">{{data.confirmLabel | translate: translateService.cultureCode}}</button>\r\n</div>\r\n",
                styles: [".mat-card{box-shadow:none;padding-left:0!important}.mat-dialog-title{padding-left:15px}.mat-dialog-actions{margin-bottom:-14px}"]
            }] }
];
/** @nocollapse */
ConfirmDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: MatDialogRef },
    { type: TranslationService }
];
if (false) {
    /** @type {?} */
    ConfirmDialogComponent.prototype.data;
    /** @type {?} */
    ConfirmDialogComponent.prototype.dialogRef;
    /** @type {?} */
    ConfirmDialogComponent.prototype.translateService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/directives/confirm-action.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfirmActionDirective {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        /** @type {?} */
        const confirmDialogData = {
            title: 'Confirm publish tender',
            text: 'This action is irrevertible, are you sure?',
            translatedText: undefined,
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            action: this.action,
            parameters: this.parameters
        };
        this.dialog.open(ConfirmDialogComponent, { panelClass: 'modal-small', data: confirmDialogData });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.viewContainer.createEmbeddedView(this.templateRef);
    }
}
ConfirmActionDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[confirmAction]'
            },] }
];
/** @nocollapse */
ConfirmActionDirective.ctorParameters = () => [
    { type: MatDialog }
];
ConfirmActionDirective.propDecorators = {
    action: [{ type: Input, args: ['confirmAction',] }],
    parameters: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    ConfirmActionDirective.prototype.action;
    /** @type {?} */
    ConfirmActionDirective.prototype.parameters;
    /**
     * @type {?}
     * @private
     */
    ConfirmActionDirective.prototype.dialog;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/error-display/error-dialog/error-dialog.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ErrorData() { }
if (false) {
    /** @type {?} */
    ErrorData.prototype.errors;
}
class ErrorDialogComponent {
    /**
     * @param {?} data
     * @param {?} translationService
     */
    constructor(data, translationService) {
        this.data = data;
        this.translationService = translationService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ErrorDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-error-dialog',
                template: "<h1 mat-dialog-title>{{'There are errors' | translate: translationService.cultureCode}}</h1>\r\n<div mat-dialog-content>\r\n  <div fxLayout=\"column\">\r\n    <span class=\"mat-h4 m-t-15 mat-error\" *ngFor=\"let error of data.errors\" fxFlex>{{error}}</span>\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions>\r\n</div>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ErrorDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: TranslationService }
];
if (false) {
    /** @type {?} */
    ErrorDialogComponent.prototype.data;
    /** @type {?} */
    ErrorDialogComponent.prototype.translationService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/poco/errorMessage.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorMessage {
    constructor() {
        this.isCleanup = false;
    }
}
if (false) {
    /** @type {?} */
    ErrorMessage.prototype.source;
    /** @type {?} */
    ErrorMessage.prototype.errors;
    /** @type {?} */
    ErrorMessage.prototype.isCleanup;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/error-messages.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorMessagesService {
    /**
     * @param {?} translationService
     * @param {?} dialog
     * @param {?} snackBar
     */
    constructor(translationService, dialog, snackBar) {
        this.translationService = translationService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.propertyValidationErrors = {};
        this.errorMessagesSubject = new Subject();
        this.errorPropertyMessageSubject = new Subject();
        this.removeFormErrorsSubject = new Subject();
    }
    /**
     * @param {?} errs
     * @return {?}
     */
    showErrorDialog(errs) {
        this.dialog.open(ErrorDialogComponent, {
            data: { errors: errs }, panelClass: 'dialog-error'
        });
    }
    /**
     * @param {?} errors
     * @param {?=} source
     * @return {?}
     */
    publishMessages(errors, source) {
        // TODO: errors with property name 'popup' should not go to propertyvalidators
        // TODO: errors with property name 'popup' should not go to propertyvalidators
        /** @type {?} */
        const errorM = new ErrorMessage();
        errorM.source = source;
        errorM.errors = [];
        /** @type {?} */
        const ex = this.propertyValidationErrors[source];
        if (ex !== undefined) {
            /** @type {?} */
            const becameValid = [];
            /** @type {?} */
            const stillInvalid = [];
            for (let index = 0; index < ex.length; index++) {
                /** @type {?} */
                const element = ex[index];
                /** @type {?} */
                const stillInvalidProperty = errors.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.propertyName === element.propertyName));
                if (stillInvalidProperty !== undefined) {
                    stillInvalidProperty.isCleanup = false;
                    stillInvalid.push(stillInvalidProperty);
                }
                else {
                    element.isCleanup = true;
                    becameValid.push(element);
                }
            }
            for (let index = 0; index < errors.length; index++) {
                /** @type {?} */
                const element = errors[index];
                /** @type {?} */
                const newError = ex.find((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.propertyName === element.propertyName));
                if (newError === undefined) {
                    element.isCleanup = false;
                    stillInvalid.push(element);
                }
            }
            this.propertyValidationErrors[source] = stillInvalid;
            for (let index = 0; index < becameValid.length; index++) {
                /** @type {?} */
                const element = becameValid[index];
                this.publishPropertyMessage(element);
            }
        }
        else {
            for (let index = 0; index < errors.length; index++) {
                /** @type {?} */
                const element = errors[index];
                element.isCleanup = false;
            }
            this.propertyValidationErrors[source] = errors;
        }
        for (let index = 0; index < this.propertyValidationErrors[source].length; index++) {
            /** @type {?} */
            const element = this.propertyValidationErrors[source][index];
            this.publishPropertyMessage(element);
        }
        /** @type {?} */
        const generalErrors = errors.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.propertyName === 'popup'));
        for (let index = 0; index < generalErrors.length; index++) {
            /** @type {?} */
            const element = generalErrors[index];
            errorM.errors.push(...element.errorMessage.split('###'));
            // errorM.errors.push(element.errorMessage);
        }
        if (this.propertyValidationErrors[source].length > 0 && generalErrors.length === 0 && source !== 'login') {
            this.snackBar.open(this.translationService.getForKey('There were errors!'), null, {
                duration: 2000,
                verticalPosition: 'top',
                panelClass: 'danger'
            });
        }
        this.errorMessagesSubject.next(errorM);
    }
    /**
     * @param {?} source
     * @return {?}
     */
    clearMessages(source) {
        /** @type {?} */
        const errorM = new ErrorMessage();
        errorM.source = source;
        errorM.isCleanup = true;
        this.errorMessagesSubject.next(errorM);
    }
    /**
     * @param {?} validationMessage
     * @return {?}
     */
    publishPropertyMessage(validationMessage) {
        this.errorPropertyMessageSubject.next(validationMessage);
    }
}
ErrorMessagesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ErrorMessagesService.ctorParameters = () => [
    { type: TranslationService },
    { type: MatDialog },
    { type: MatSnackBar }
];
/** @nocollapse */ ErrorMessagesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ErrorMessagesService_Factory() { return new ErrorMessagesService(ɵɵinject(TranslationService), ɵɵinject(MatDialog$1), ɵɵinject(MatSnackBar$1)); }, token: ErrorMessagesService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ErrorMessagesService.prototype.errorMessagesSubject;
    /** @type {?} */
    ErrorMessagesService.prototype.errorPropertyMessageSubject;
    /** @type {?} */
    ErrorMessagesService.prototype.removeFormErrorsSubject;
    /**
     * @type {?}
     * @private
     */
    ErrorMessagesService.prototype.propertyValidationErrors;
    /**
     * @type {?}
     * @private
     */
    ErrorMessagesService.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    ErrorMessagesService.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    ErrorMessagesService.prototype.snackBar;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/directives/form-validator.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormValidatorDirective {
    /**
     * @param {?} form
     * @param {?} errorService
     */
    constructor(form, errorService) {
        this.form = form;
        this.errorService = errorService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.errorService.errorPropertyMessageSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === false) {
                /** @type {?} */
                const control = this.form.form.get(x.propertyName);
                control.setErrors({ incorrect: true });
                control.markAsDirty();
                control.markAsTouched();
            }
            else if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === true)
                this.form.form.setErrors(null);
        }));
        this.errorService.removeFormErrorsSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.form.form.setErrors(null);
        }));
    }
}
FormValidatorDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'form[formValidator]'
            },] }
];
/** @nocollapse */
FormValidatorDirective.ctorParameters = () => [
    { type: NgForm },
    { type: ErrorMessagesService }
];
if (false) {
    /** @type {?} */
    FormValidatorDirective.prototype.form;
    /**
     * @type {?}
     * @private
     */
    FormValidatorDirective.prototype.errorService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/directives/number-formatter.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberFormatterDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.regexStr = '^[0-9]*$';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyPress(event) {
        return new RegExp(this.regexStr).test(event.key);
    }
}
NumberFormatterDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[numberFormatter]'
            },] }
];
/** @nocollapse */
NumberFormatterDirective.ctorParameters = () => [
    { type: ElementRef }
];
NumberFormatterDirective.propDecorators = {
    isAlphaNumeric: [{ type: Input }],
    onKeyPress: [{ type: HostListener, args: ['keypress', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    NumberFormatterDirective.prototype.regexStr;
    /** @type {?} */
    NumberFormatterDirective.prototype.isAlphaNumeric;
    /**
     * @type {?}
     * @private
     */
    NumberFormatterDirective.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/boolean-evaluate-status-to-string.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BooleanEvaluateStatusToStringPipe {
    /**
     * @param {?} translationService
     */
    constructor(translationService) {
        this.translationService = translationService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        if (Utils.isNullEmptyOrUndefined(value))
            return '-';
        /** @type {?} */
        const key = value ? 'Evaluated (accepted)' : 'Evaluated (rejected)';
        return this.translationService.getForKey(key);
    }
}
BooleanEvaluateStatusToStringPipe.decorators = [
    { type: Pipe, args: [{
                name: 'booleanEvaluateStatusToString'
            },] }
];
/** @nocollapse */
BooleanEvaluateStatusToStringPipe.ctorParameters = () => [
    { type: TranslationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanEvaluateStatusToStringPipe.prototype.translationService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/booleanToYesNo.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BooleanToYesNoPipe {
    /**
     * @param {?} translationService
     */
    constructor(translationService) {
        this.translationService = translationService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        /** @type {?} */
        const key = value ? 'Yes' : 'No';
        return this.translationService.getForKey(key);
    }
}
BooleanToYesNoPipe.decorators = [
    { type: Pipe, args: [{
                name: 'booleanToYesNo'
            },] }
];
/** @nocollapse */
BooleanToYesNoPipe.ctorParameters = () => [
    { type: TranslationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanToYesNoPipe.prototype.translationService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/classification-service.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClassificationService {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
        this.classificationCache = {};
        this.classificationValueCache = {};
    }
    /**
     * @param {?} classificationName
     * @param {?=} classificationModel
     * @param {?=} volatile
     * @return {?}
     */
    getClassificationValues(classificationName, classificationModel, volatile = false) {
        if (Utils.isNullEmptyOrUndefined(classificationName))
            return;
        else {
            if (Utils.isNullEmptyOrUndefined(classificationModel))
                classificationModel = '';
            else
                classificationModel = '?model=' + classificationModel;
            /** @type {?} */
            const key = classificationName + classificationModel;
            if (volatile === true)
                return this.apiService.get('common', 'GetClassification/' + classificationName + classificationModel);
            if (this.classificationCache[key] === undefined)
                this.classificationCache[key]
                    = this.apiService.get('common', 'GetClassification/' + classificationName + classificationModel).pipe(shareReplay(1));
            return this.classificationCache[key];
        }
    }
    /**
     * @param {?} classificationName
     * @param {?=} classificationModel
     * @param {?=} volatile
     * @return {?}
     */
    getGroupedClassificationValues(classificationName, classificationModel, volatile = false) {
        if (Utils.isNullEmptyOrUndefined(classificationName))
            return;
        else {
            if (Utils.isNullEmptyOrUndefined(classificationModel))
                classificationModel = '';
            else
                classificationModel = '?model=' + classificationModel;
            /** @type {?} */
            const key = classificationName + classificationModel;
            if (volatile === true)
                return this.apiService.get('common', 'GetGroupedClassification/' + classificationName + classificationModel);
            if (this.classificationCache[key] === undefined)
                this.classificationCache[key]
                    = this.apiService.get('common', 'GetGroupedClassification/' + classificationName + classificationModel).pipe(shareReplay(1));
            return this.classificationCache[key];
        }
    }
    /**
     * @param {?} valueId
     * @return {?}
     */
    getClassificationValue(valueId) {
        if (Utils.isNullEmptyOrUndefined(valueId))
            return of('-');
        /** @type {?} */
        const key = valueId;
        if (this.classificationValueCache[key] === undefined) {
            /** @type {?} */
            const httpParams = new HttpParams().set('valueId', '' + valueId);
            this.classificationValueCache[key]
                = this.apiService.get('common', 'getClassificationValue', httpParams).pipe(shareReplay(1), switchMap((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => {
                    if (x === undefined || x === null || x.value === undefined)
                        return '';
                    return of(x);
                })));
        }
        // const httpParams = new HttpParams().set('valueId', '' + valueId);
        // return this.apiService.get('common', 'getClassificationValue', httpParams);
        return this.classificationValueCache[key];
    }
}
ClassificationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ClassificationService.ctorParameters = () => [
    { type: ApiService }
];
/** @nocollapse */ ClassificationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ClassificationService_Factory() { return new ClassificationService(ɵɵinject(ApiService)); }, token: ClassificationService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ClassificationService.prototype.classificationCache;
    /**
     * @type {?}
     * @private
     */
    ClassificationService.prototype.classificationValueCache;
    /**
     * @type {?}
     * @private
     */
    ClassificationService.prototype.apiService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/classification-value-get.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClassificationValueGet {
    /**
     * @param {?} classificationService
     */
    constructor(classificationService) {
        this.classificationService = classificationService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        if (value === undefined || value === null || typeof (value) === 'object')
            return '';
        return this.classificationService.getClassificationValue(value);
    }
}
ClassificationValueGet.decorators = [
    { type: Pipe, args: [{
                name: 'classificationValueGet'
            },] }
];
/** @nocollapse */
ClassificationValueGet.ctorParameters = () => [
    { type: ClassificationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ClassificationValueGet.prototype.classificationService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/classification-value.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClassificationValuePipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        if (value === undefined || value === null || value.value === undefined || value.value === null)
            return '-';
        return value.value.caption;
    }
}
ClassificationValuePipe.decorators = [
    { type: Pipe, args: [{
                name: 'classificationValue'
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: shared/extensions/constants.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class Constants {
}
Constants.currencyCodes = {
    941: 'RSD',
    978: 'EUR',
    840: 'USD',
    826: 'GBP'
};
Constants.quantityCodes = {
    1: 'pcs',
    2: 'pack',
    3: 'kg'
};
Constants.DATE_FMT = 'd.M.yyyy';
Constants.DATE_TIME_FMT = `${Constants.DATE_FMT} H:mm`;
if (false) {
    /** @type {?} */
    Constants.currencyCodes;
    /** @type {?} */
    Constants.quantityCodes;
    /** @type {?} */
    Constants.DATE_FMT;
    /** @type {?} */
    Constants.DATE_TIME_FMT;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/currency.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrencyPipe {
    constructor() {
        this.decimalPipe = new DecimalPipe('sr-Latn-ME');
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        if (Utils.isNullEmptyOrUndefined(value) || Utils.isNullEmptyOrUndefined(value.amount))
            return '';
        /** @type {?} */
        let v = '' + this.decimalPipe.transform(value.amount, '1.2-2');
        if (!Utils.isNullEmptyOrUndefined(value.currencyCode))
            v += ' ' + (Constants.currencyCodes[value.currencyCode] !== undefined ? Constants.currencyCodes[value.currencyCode] : '');
        return v;
    }
}
CurrencyPipe.decorators = [
    { type: Pipe, args: [{
                name: 'currencyAmmount'
            },] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyPipe.prototype.decimalPipe;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/date-time-format.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DateTimeFormatPipe extends DatePipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        return super.transform(value, Constants.DATE_TIME_FMT);
    }
}
DateTimeFormatPipe.decorators = [
    { type: Pipe, args: [{
                name: 'dateTimeFormat'
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/empty-string-to-default.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EmptyStringToDefaultPipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        // if (value === undefined || value === null || value.value === undefined || value.value === null) return '-';
        // return value.value.caption;
        if (Utils.isNullEmptyOrUndefined(value))
            return '-';
        return value;
    }
}
EmptyStringToDefaultPipe.decorators = [
    { type: Pipe, args: [{
                name: 'emptyStringToDefault'
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/lifecycle-status.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LifecycleStatusPipe {
    constructor() {
        this.statuses = {
            1: 'Ready',
            2: 'Active',
            4: 'Canceled',
            8: 'Completed',
            16: 'Terminated',
            32: 'Suspend',
            64: 'Published',
            128: 'Deleted',
            256: 'Deactivated',
            512: 'PublishPending'
        };
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        /** @type {?} */
        const status = this.statuses[value];
        if (status === undefined)
            return value;
        return status;
    }
}
LifecycleStatusPipe.decorators = [
    { type: Pipe, args: [{
                name: 'lifecycleStatus'
            },] }
];
/** @nocollapse */
LifecycleStatusPipe.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    LifecycleStatusPipe.prototype.statuses;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/quantity.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QuantityPipe {
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        /** @type {?} */
        let v = '' + value.amount;
        if (value.unitOfMeasure !== undefined)
            v += ' ' + value.unitOfMeasure;
        return v;
    }
}
QuantityPipe.decorators = [
    { type: Pipe, args: [{
                name: 'quantity'
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: shared/pipes/translate.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslatePipe {
    /**
     * @param {?} translationService
     */
    constructor(translationService) {
        this.translationService = translationService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @param {?=} byObject
     * @return {?}
     */
    transform(value, args, byObject) {
        if (args === undefined || args === null)
            return;
        if (!Utils.isNullEmptyOrUndefined(byObject))
            return this.translationService.getForKeyByObject(value);
        // console.log(value);
        return this.translationService.getForKey(value);
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{
                name: 'translate'
            },] }
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.translationService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/currency-amount/decimal-formatter.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DecimalFormatterDirective {
    /**
     * @param {?} elementRef
     * @param {?} ngModel
     */
    constructor(elementRef, ngModel) {
        this.elementRef = elementRef;
        this.ngModel = ngModel;
        this.locale = 'sr-Latn-ME';
        this.rgx = /^\d*((\,|\.)\d*)?(?!\w)$/g;
        this.el = this.elementRef.nativeElement;
        this.decimalFormatPipe = new DecimalPipe('sr-Latn-ME');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.decimals == null)
            this.decimals = '1.2-2';
        this.el.value = this.decimalFormatPipe.transform(this.el.value, this.decimals, this.locale);
        if (this.el.value === '0')
            this.el.value = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onFocus(value) {
        this.el.value = this.ngModel.viewModel;
        this.lastValue = this.ngModel.viewModel;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onBlur(value) {
        try {
            this.ngModel.viewModel = this.el.value;
            /** @type {?} */
            const nocomma = this.el.value.replace(',', '.');
            this.el.value = this.decimalFormatPipe.transform(nocomma, this.decimals, this.locale);
        }
        catch (ex) {
            if (!Utils.isNullEmptyOrUndefined(this.lastValue) && Utils.regexMatch(this.rgx, this.lastValue)) {
                this.el.value = this.decimalFormatPipe.transform(this.lastValue, this.decimals, this.locale);
                this.ngModel.viewModel = this.lastValue;
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyPress(event) {
        this.lastValue = Utils.deepClone(event.target.value);
        if ((event.code === 'Comma' && this.lastValue.indexOf(',') === -1)
            || event.code === 'Delete' || event.code === 'Backspace' || !RegExp(/\D/).test(event.key)) {
            return true;
        }
        else {
            return false;
        }
    }
}
DecimalFormatterDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[decimalFormatter][ngModel]',
                providers: [NgModel]
            },] }
];
/** @nocollapse */
DecimalFormatterDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgModel }
];
DecimalFormatterDirective.propDecorators = {
    decimals: [{ type: Input, args: ['decimals',] }],
    onFocus: [{ type: HostListener, args: ['focus', ['$event.target.value'],] }],
    onBlur: [{ type: HostListener, args: ['blur', ['$event.target.value'],] }],
    onKeyPress: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    DecimalFormatterDirective.prototype.decimals;
    /** @type {?} */
    DecimalFormatterDirective.prototype.locale;
    /** @type {?} */
    DecimalFormatterDirective.prototype.decimalFormatPipe;
    /** @type {?} */
    DecimalFormatterDirective.prototype.lastValue;
    /** @type {?} */
    DecimalFormatterDirective.prototype.rgx;
    /**
     * @type {?}
     * @private
     */
    DecimalFormatterDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    DecimalFormatterDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    DecimalFormatterDirective.prototype.ngModel;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/typeahead-input/options-scroll.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IAutoCompleteScrollEvent() { }
if (false) {
    /** @type {?} */
    IAutoCompleteScrollEvent.prototype.autoComplete;
    /** @type {?} */
    IAutoCompleteScrollEvent.prototype.scrollEvent;
}
class OptionsScrollDirective {
    /**
     * @param {?} autoComplete
     */
    constructor(autoComplete) {
        this.autoComplete = autoComplete;
        this.tressholdPercent = 0.8;
        // tslint:disable-next-line:no-output-rename
        this.scroll = new EventEmitter();
        // tslint:disable-next-line:variable-name
        this._onDestroy = new Subject();
        this.autoComplete.opened.pipe(tap((/**
         * @return {?}
         */
        () => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.removeScrollEventListener();
                this.autoComplete.panel.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
            }), 1);
        })), takeUntil(this._onDestroy)).subscribe();
        this.autoComplete.closed.pipe(tap((/**
         * @return {?}
         */
        () => this.removeScrollEventListener())), takeUntil(this._onDestroy)).subscribe();
    }
    /**
     * @private
     * @return {?}
     */
    removeScrollEventListener() {
        if (!Utils.isNullEmptyOrUndefined(this.autoComplete.panel))
            this.autoComplete.panel.nativeElement
                .removeEventListener('scroll', this.onScroll);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
        this.removeScrollEventListener();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        if (this.tressholdPercent === undefined)
            this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
        else {
            /** @type {?} */
            const tress = this.tressholdPercent * 100 * this.autoComplete.panel.nativeElement.scrollHeight / 100;
            /** @type {?} */
            const current = this.autoComplete.panel.nativeElement.scrollTop + this.autoComplete.panel.nativeElement.clientHeight;
            if (current > tress)
                this.scroll.next({ autoComplete: this.autoComplete, scrollEvent: event });
        }
    }
}
OptionsScrollDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'mat-autocomplete[optionsScroll]'
            },] }
];
/** @nocollapse */
OptionsScrollDirective.ctorParameters = () => [
    { type: MatAutocomplete }
];
OptionsScrollDirective.propDecorators = {
    tressholdPercent: [{ type: Input }],
    scroll: [{ type: Output, args: ['optionsScroll',] }]
};
if (false) {
    /** @type {?} */
    OptionsScrollDirective.prototype.tressholdPercent;
    /** @type {?} */
    OptionsScrollDirective.prototype.scroll;
    /** @type {?} */
    OptionsScrollDirective.prototype._onDestroy;
    /** @type {?} */
    OptionsScrollDirective.prototype.autoComplete;
}

/**
 * @fileoverview added by tsickle
 * Generated from: material/material.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MaterialModule {
}
MaterialModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                exports: [
                    MatToolbarModule,
                    MatButtonModule,
                    MatSidenavModule,
                    MatIconModule,
                    MatListModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatButtonToggleModule,
                    MatChipsModule,
                    MatBadgeModule,
                    MatSlideToggleModule,
                    MatCardModule,
                    MatMenuModule,
                    MatDividerModule,
                    MatProgressSpinnerModule,
                    MatRadioModule,
                    MatCheckboxModule,
                    MatGridListModule,
                    MatTooltipModule,
                    MatExpansionModule,
                    MatSelectModule,
                    MatDatepickerModule,
                    MatProgressBarModule,
                    MatSliderModule,
                    MatStepperModule,
                    MatDialogModule,
                    MatTabsModule,
                    MatNativeDateModule,
                    FlexLayoutModule,
                    MatSnackBarModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatTableModule,
                    MatPaginatorModule,
                    MatSortModule,
                    MatChipsModule,
                    MatAutocompleteModule,
                    MatTreeModule,
                    DragDropModule,
                    ScrollingModule
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/actions-ribbon.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActionsRibbonService {
    constructor() {
        this.changeSubject = new Subject();
    }
    /**
     * @return {?}
     */
    change() {
        this.changeSubject.next();
    }
    /**
     * @return {?}
     */
    clear() {
        this.infoTemplate = undefined;
        this.actionsTemplate = undefined;
        this.spacerTemplate = undefined;
        this.actionsContextTemplate = undefined;
        this.change();
    }
}
ActionsRibbonService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ActionsRibbonService.ctorParameters = () => [];
/** @nocollapse */ ActionsRibbonService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ActionsRibbonService_Factory() { return new ActionsRibbonService(); }, token: ActionsRibbonService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ActionsRibbonService.prototype.infoTemplate;
    /** @type {?} */
    ActionsRibbonService.prototype.actionsTemplate;
    /** @type {?} */
    ActionsRibbonService.prototype.spacerTemplate;
    /** @type {?} */
    ActionsRibbonService.prototype.actionsContextTemplate;
    /** @type {?} */
    ActionsRibbonService.prototype.changeSubject;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/actions-ribbon/actions-ribbon.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActionsRibbonComponent {
    /**
     * @param {?} actionsRibbonService
     * @param {?} cd
     */
    constructor(actionsRibbonService, cd) {
        this.actionsRibbonService = actionsRibbonService;
        this.cd = cd;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.actionsRibbonService.changeSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.cd.markForCheck();
        }));
    }
}
ActionsRibbonComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-actions-ribbon',
                template: "<div class=\"ribbon\" *ngIf=\"!(actionsRibbonService.infoTemplate === undefined\r\n&& actionsRibbonService.spacerTemplate === undefined\r\n&& actionsRibbonService.actionsTemplate === undefined\r\n&& actionsRibbonService.actionsContextTemplate === undefined)\">\r\n  <div class=\"ribbon-info\">\r\n    <ng-template [ngTemplateOutlet]=\"actionsRibbonService.infoTemplate\">\r\n    </ng-template>\r\n  </div>\r\n  <ng-template [ngTemplateOutlet]=\"actionsRibbonService.spacerTemplate\">\r\n  </ng-template>\r\n  <span fxFlex></span><span fxFlex></span>\r\n  <div class=\"action ribbon-context-action\" [class.last]=\"actionsRibbonService.actionsTemplate === undefined\"\r\n    [class.has-action]=\"actionsRibbonService.actionsContextTemplate !== undefined\">\r\n    <ng-template [ngTemplateOutlet]=\"actionsRibbonService.actionsContextTemplate\">\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"action ribbon-actions\" [class.has-action]=\"actionsRibbonService.actionsTemplate !== undefined\">\r\n    <ng-template [ngTemplateOutlet]=\"actionsRibbonService.actionsTemplate\">\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".ribbon{background-color:#dd2638;color:#fff;min-height:70px}"]
            }] }
];
/** @nocollapse */
ActionsRibbonComponent.ctorParameters = () => [
    { type: ActionsRibbonService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    ActionsRibbonComponent.prototype.actionsRibbonService;
    /**
     * @type {?}
     * @private
     */
    ActionsRibbonComponent.prototype.cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/base-selected-tab/base-selected-tab.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseSelectedTabComponent {
    /**
     * @param {?} activatedRoute
     * @param {?} route
     */
    constructor(activatedRoute, route) {
        this.activatedRoute = activatedRoute;
        this.route = route;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    setUpTab() {
        this.activatedRoute.queryParams.subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            if (params.tab) {
                this.tabSelectedIndex = +params.tab;
                this.route.navigate([], {
                    queryParams: {
                        tab: null,
                    },
                    queryParamsHandling: 'merge',
                });
            }
        }));
    }
    /**
     * @param {?} selectedIndex
     * @param {?=} tabSubjects
     * @return {?}
     */
    navigateToTabWithSubject(selectedIndex, tabSubjects) {
        tabSubjects[selectedIndex].next();
        // tabSubjects[selectedIndex].complete();
    }
}
BaseSelectedTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-base-selected-tab',
                template: `
    <p>
      NO UI TO BE FOUND HERE!
    </p>
  `,
                styles: [""]
            }] }
];
/** @nocollapse */
BaseSelectedTabComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Router }
];
if (false) {
    /** @type {?} */
    BaseSelectedTabComponent.prototype.tabSelectedIndex;
    /**
     * @type {?}
     * @private
     */
    BaseSelectedTabComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    BaseSelectedTabComponent.prototype.route;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/classification-group-input/classification-group-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClassificationGroupInputComponent {
    /**
     * @param {?} classificationService
     * @param {?} translationService
     * @param {?} errorMessageService
     * @param {?} formObject
     */
    constructor(classificationService, translationService, errorMessageService, formObject) {
        this.classificationService = classificationService;
        this.translationService = translationService;
        this.errorMessageService = errorMessageService;
        this.formObject = formObject;
        this.classificationValueIdChange = new EventEmitter();
        this.objectClassificationValueChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // tslint:disable-next-line:max-line-length
        this.classificationService.getGroupedClassificationValues(this.classificationName, this.classificationModel, this.isVolatile).subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            /** @type {?} */
            let vals = [];
            for (let index = 0; index < x.value.length; index++) {
                /** @type {?} */
                const element = x.value[index];
                vals = [...vals, ...element.options];
            }
            this.options = vals;
            this.defaultValue = this.options.find((/**
             * @param {?} y
             * @return {?}
             */
            y => y.isDefaultValue === true));
            this.groups = x.value;
            if (!Utils.isNullEmptyOrUndefined(this.classificationValueId)) {
                /** @type {?} */
                const exValue = this.options.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                y => '' + y.id === '' + this.classificationValueId));
                if (exValue !== undefined) {
                    this.classificationValueId = exValue.id;
                    this.objectClassificationValueChange.emit(exValue);
                }
                else {
                    this.classificationValueId = undefined;
                    this.classificationValueIdChange.emit(this.classificationValueId);
                }
            }
            else if (!Utils.isNullEmptyOrUndefined(this.selectedValue)) {
                /** @type {?} */
                const exValue = this.options.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                y => '' + y.value === '' + this.selectedValue));
                if (exValue !== undefined) {
                    this.classificationValueId = exValue.id;
                    this.objectClassificationValueChange.emit(exValue);
                }
            }
            else if (!Utils.isNullEmptyOrUndefined(this.defaultValue)) {
                this.classificationValueId = this.defaultValue.id;
                this.objectClassificationValueChange.emit(this.defaultValue);
            }
            if (this.disabled === undefined)
                this.disabled = false;
        }));
        if (this.propertyName === undefined)
            this.propertyName = Utils.newTechnicalNumber();
        if (Utils.isNullEmptyOrUndefined(this.ngFormObject))
            this.form = this.ngFormObject;
        if (Utils.isNullEmptyOrUndefined(this.form)) {
            this.form = this.formObject;
        }
        this.ngControl = new FormControl();
        if (this.form !== undefined && this.form !== null && this.propertyName !== undefined)
            this.form.form.addControl(this.propertyName, this.ngControl);
        this.errorMessageService.errorPropertyMessageSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === false) {
                this.form.form.get(x.propertyName).setErrors({ incorrect: true });
                this.hasErrors = true;
            }
            else if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === true) {
                this.hasErrors = false;
                this.form.form.get(x.propertyName).setErrors(null);
            }
        }));
        this.errorMessageService.removeFormErrorsSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.hasErrors = false;
            if (!Utils.isNullEmptyOrUndefined(this.form.form.get(this.propertyName) && this.propertyName !== undefined))
                this.form.form.get(this.propertyName).setErrors(null);
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    change(event) {
        this.classificationValueId = event.value;
        this.classificationValueIdChange.emit(this.classificationValueId);
        /** @type {?} */
        const exValue = this.options.find((/**
         * @param {?} y
         * @return {?}
         */
        y => '' + y.id === '' + this.classificationValueId));
        if (exValue !== undefined)
            this.objectClassificationValueChange.emit(exValue);
        /** @type {?} */
        const pname = this.propertyName;
        this.form.form.markAsDirty();
        this.form.form.patchValue({ pname: this.classificationValueId });
    }
}
ClassificationGroupInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-classification-group-input',
                template: "<form formValidator>\n  <mat-form-field>\n    <mat-select [name]=\"propertyName\" placeholder=\"{{placeholder}}\" (selectionChange)=\"change($event)\" [(ngModel)]=\"classificationValueId\" [disabled]=\"disabled\">\n      <mat-optgroup *ngFor=\"let group of groups\" [label]=\"group.description | translate: translationService.cultureCode\">\n        <mat-option *ngFor=\"let option of group.options\" [value]=\"option.id\" matTooltip=\"{{option.description | translate: translationService.cultureCode}}\">\n          {{option.caption | translate: translationService.cultureCode}}\n        </mat-option>\n      </mat-optgroup>\n    </mat-select>\n    <mat-error app-input-validation-message [propertyName]=\"propertyName\"></mat-error>\n  </mat-form-field>\n</form>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ClassificationGroupInputComponent.ctorParameters = () => [
    { type: ClassificationService },
    { type: TranslationService },
    { type: ErrorMessagesService },
    { type: NgForm, decorators: [{ type: Optional }] }
];
ClassificationGroupInputComponent.propDecorators = {
    classificationValueId: [{ type: Input }],
    classificationName: [{ type: Input }],
    classificationModel: [{ type: Input }],
    placeholder: [{ type: Input }],
    isVolatile: [{ type: Input }],
    propertyName: [{ type: Input }],
    selectedValue: [{ type: Input }],
    disabled: [{ type: Input }],
    ngFormObject: [{ type: Input }],
    classificationValueIdChange: [{ type: Output }],
    objectClassificationValueChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.classificationValueId;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.classificationName;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.classificationModel;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.placeholder;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.isVolatile;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.propertyName;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.selectedValue;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.disabled;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.ngFormObject;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.hasErrors;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.groups;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.options;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.defaultValue;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.helperValue;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.ngControl;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.form;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.classificationValueIdChange;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.objectClassificationValueChange;
    /**
     * @type {?}
     * @private
     */
    ClassificationGroupInputComponent.prototype.classificationService;
    /** @type {?} */
    ClassificationGroupInputComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    ClassificationGroupInputComponent.prototype.errorMessageService;
    /**
     * @type {?}
     * @private
     */
    ClassificationGroupInputComponent.prototype.formObject;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/classification-input/classification-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ClassificationInputComponent {
    /**
     * @param {?} classificationService
     * @param {?} translationService
     * @param {?} errorMessageService
     * @param {?} formObject
     */
    constructor(classificationService, translationService, errorMessageService, formObject) {
        this.classificationService = classificationService;
        this.translationService = translationService;
        this.errorMessageService = errorMessageService;
        this.formObject = formObject;
        this.classificationValueIdChange = new EventEmitter();
        this.objectClassificationValueChange = new EventEmitter();
        if (Utils.isNullEmptyOrUndefined(this.ngFormObject))
            this.form = this.ngFormObject;
        if (Utils.isNullEmptyOrUndefined(this.form)) {
            this.form = this.formObject;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.classificationService.getClassificationValues(this.classificationName, this.classificationModel, this.isVolatile).subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.defaultValue = x.value.find((/**
             * @param {?} y
             * @return {?}
             */
            y => y.isDefaultValue === true));
            this.options = x.value;
            if (!Utils.isNullEmptyOrUndefined(this.classificationValueId)) {
                /** @type {?} */
                const exValue = this.options.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                y => '' + y.id === '' + this.classificationValueId));
                if (exValue !== undefined) {
                    this.classificationValueId = exValue.id;
                    this.classificationValueIdChange.emit(exValue.id);
                    this.objectClassificationValueChange.emit(exValue);
                }
                else {
                    this.classificationValueId = undefined;
                    this.classificationValueIdChange.emit(undefined);
                    this.classificationValueIdChange.emit(this.classificationValueId);
                }
            }
            else if (!Utils.isNullEmptyOrUndefined(this.selectedValue)) {
                /** @type {?} */
                const exValue = this.options.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                y => '' + y.value === '' + this.selectedValue));
                if (exValue !== undefined) {
                    this.classificationValueId = exValue.id;
                    this.classificationValueIdChange.emit(exValue.id);
                    this.objectClassificationValueChange.emit(exValue);
                }
            }
            else if (!Utils.isNullEmptyOrUndefined(this.defaultValue)) {
                this.classificationValueId = this.defaultValue.id;
                this.objectClassificationValueChange.emit(this.defaultValue);
                /** @type {?} */
                const pName = this.propertyName;
                this.form.form.patchValue({ pName: this.defaultValue.id });
            }
            if (this.disabled === undefined)
                this.disabled = false;
        }));
        if (this.propertyName === undefined)
            this.propertyName = Utils.newTechnicalNumber();
        this.ngControl = new FormControl();
        if (this.form !== undefined && this.form !== null && this.propertyName !== undefined)
            this.form.form.addControl(this.propertyName, this.ngControl);
        this.errorMessageService.errorPropertyMessageSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === false) {
                this.form.form.get(x.propertyName).setErrors({ incorrect: true });
                this.hasErrors = true;
            }
            else if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === true) {
                this.hasErrors = false;
                this.form.form.get(x.propertyName).setErrors(null);
            }
        }));
        this.errorMessageService.removeFormErrorsSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.hasErrors = false;
            if (!Utils.isNullEmptyOrUndefined(this.form.form.get(this.propertyName) && this.propertyName !== undefined))
                this.form.form.get(this.propertyName).setErrors(null);
        }));
        if (this.resetToDefault !== undefined) {
            this.resetToDefault.subscribe((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                if (!Utils.isNullEmptyOrUndefined(this.defaultValue)) {
                    this.classificationValueId = this.defaultValue.id;
                    this.classificationValueIdChange.emit(this.defaultValue.id);
                    this.objectClassificationValueChange.emit(this.defaultValue);
                }
            }));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    change(event) {
        this.classificationValueId = event.value;
        this.classificationValueIdChange.emit(this.classificationValueId);
        /** @type {?} */
        const exValue = this.options.find((/**
         * @param {?} y
         * @return {?}
         */
        y => '' + y.id === '' + this.classificationValueId));
        if (exValue !== undefined)
            this.objectClassificationValueChange.emit(exValue);
        /** @type {?} */
        const pname = this.propertyName;
        this.form.form.markAsDirty();
        this.form.form.patchValue({ pname: this.classificationValueId });
    }
}
ClassificationInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-classification-input',
                template: "  <form formValidator>\r\n    <mat-form-field>\r\n      <mat-select [name]=\"propertyName\" placeholder=\"{{placeholder}}\" (selectionChange)=\"change($event)\" [(ngModel)]=\"classificationValueId\" [disabled]=\"disabled\">\r\n        <mat-option *ngFor=\"let option of options\" [value]=\"option.id\" matTooltip=\"{{option.description | translate: translationService.cultureCode}}\">\r\n          {{option.caption | translate: translationService.cultureCode}}\r\n        </mat-option>\r\n      </mat-select>\r\n      <mat-error app-input-validation-message [propertyName]=\"propertyName\"></mat-error>\r\n    </mat-form-field>\r\n  </form>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ClassificationInputComponent.ctorParameters = () => [
    { type: ClassificationService },
    { type: TranslationService },
    { type: ErrorMessagesService },
    { type: NgForm, decorators: [{ type: Optional }] }
];
ClassificationInputComponent.propDecorators = {
    classificationValueId: [{ type: Input }],
    classificationName: [{ type: Input }],
    classificationModel: [{ type: Input }],
    placeholder: [{ type: Input }],
    isVolatile: [{ type: Input }],
    propertyName: [{ type: Input }],
    selectedValue: [{ type: Input }],
    disabled: [{ type: Input }],
    resetToDefault: [{ type: Input }],
    ngFormObject: [{ type: Input }],
    classificationValueIdChange: [{ type: Output }],
    objectClassificationValueChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ClassificationInputComponent.prototype.classificationValueId;
    /** @type {?} */
    ClassificationInputComponent.prototype.classificationName;
    /** @type {?} */
    ClassificationInputComponent.prototype.classificationModel;
    /** @type {?} */
    ClassificationInputComponent.prototype.placeholder;
    /** @type {?} */
    ClassificationInputComponent.prototype.isVolatile;
    /** @type {?} */
    ClassificationInputComponent.prototype.propertyName;
    /** @type {?} */
    ClassificationInputComponent.prototype.selectedValue;
    /** @type {?} */
    ClassificationInputComponent.prototype.disabled;
    /** @type {?} */
    ClassificationInputComponent.prototype.resetToDefault;
    /** @type {?} */
    ClassificationInputComponent.prototype.ngFormObject;
    /** @type {?} */
    ClassificationInputComponent.prototype.hasErrors;
    /** @type {?} */
    ClassificationInputComponent.prototype.options;
    /** @type {?} */
    ClassificationInputComponent.prototype.defaultValue;
    /** @type {?} */
    ClassificationInputComponent.prototype.helperValue;
    /** @type {?} */
    ClassificationInputComponent.prototype.ngControl;
    /** @type {?} */
    ClassificationInputComponent.prototype.form;
    /** @type {?} */
    ClassificationInputComponent.prototype.classificationValueIdChange;
    /** @type {?} */
    ClassificationInputComponent.prototype.objectClassificationValueChange;
    /**
     * @type {?}
     * @private
     */
    ClassificationInputComponent.prototype.classificationService;
    /** @type {?} */
    ClassificationInputComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    ClassificationInputComponent.prototype.errorMessageService;
    /**
     * @type {?}
     * @private
     */
    ClassificationInputComponent.prototype.formObject;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/POCO/currencyAmount.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrencyAmount {
    constructor() {
        this.amount = null;
    }
}
if (false) {
    /** @type {?} */
    CurrencyAmount.prototype.amount;
    /** @type {?} */
    CurrencyAmount.prototype.currencyCode;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/currency-amount/currency-amount.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CurrencyAmountComponent {
    /**
     * @param {?} classificationService
     * @param {?} errorMessageService
     * @param {?} formObject
     */
    constructor(classificationService, errorMessageService, formObject) {
        this.classificationService = classificationService;
        this.errorMessageService = errorMessageService;
        this.formObject = formObject;
        this.showCurrency = true;
        this.currencyAmountChange = new EventEmitter();
        this.currencies = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.propertyName === undefined)
            this.propertyName = Utils.newTechnicalNumber();
        if (Utils.isNullEmptyOrUndefined(this.ngFormObject))
            this.form = this.ngFormObject;
        if (Utils.isNullEmptyOrUndefined(this.form)) {
            this.form = this.formObject;
        }
        this.ngControlAmount = new FormControl();
        this.ngControlCurrency = new FormControl();
        if (this.form !== undefined) {
            this.form.form.addControl(this.propertyName + 'Amount', this.ngControlAmount);
            this.form.form.addControl(this.propertyName + 'CurrencyCode', this.ngControlCurrency);
        }
        this.getCurrency();
    }
    /**
     * @return {?}
     */
    getCurrency() {
        this.classificationService.getClassificationValues('ShortCurrency').subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (Utils.isNullEmptyOrUndefined(x) || Utils.isNullEmptyOrUndefined(x.value))
                return;
            this.currencies = x.value;
            /** @type {?} */
            const defaultCurrency = this.currencies.find((/**
             * @param {?} y
             * @return {?}
             */
            y => y.isDefaultValue === true));
            this.currencyAmount.currencyCode = defaultCurrency.value;
            this.currencyAmountChange.emit(this.currencyAmount);
        }));
    }
}
CurrencyAmountComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-currency-amount',
                template: "<form class=\"amountComponent\" formValidator>\r\n  <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\r\n      <div fxFlex=\"80%\">\r\n        <mat-form-field>\r\n          <input matInput [name]=\"propertyName+'Amount'\" type=\"text\" placeholder=\"{{placeholder}}\"\r\n          [readonly]=\"isReadOnly\"  [(ngModel)]=\"currencyAmount.amount\"\r\n          #amountInput=\"ngModel\" decimalFormatter\r\n          (ngModelChange)=\"currencyAmountChange.emit(currencyAmount)\" >\r\n          <mat-error app-input-validation-message [propertyName]=\"propertyName+'Amount'\"></mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"20%\" *ngIf=\"showCurrency\">\r\n        <mat-form-field>\r\n          <mat-select [name]=\"propertyName+'CurrencyCode'\" [(ngModel)]=\"currencyAmount.currencyCode\" [disabled]=\"isReadOnly\">\r\n              <mat-option *ngFor=\"let currency of currencies\" [value]=\"currency.value\">\r\n                  {{currency.caption}}\r\n              </mat-option>\r\n          </mat-select>\r\n          <mat-error app-input-validation-message [propertyName]=\"propertyName+'CurrencyCode'\"></mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n</form>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
CurrencyAmountComponent.ctorParameters = () => [
    { type: ClassificationService },
    { type: ErrorMessagesService },
    { type: NgForm }
];
CurrencyAmountComponent.propDecorators = {
    currencyAmount: [{ type: Input }],
    isReadOnly: [{ type: Input }],
    placeholder: [{ type: Input }],
    propertyName: [{ type: Input }],
    showCurrency: [{ type: Input }],
    ngFormObject: [{ type: Input }],
    currencyAmountChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CurrencyAmountComponent.prototype.currencyAmount;
    /** @type {?} */
    CurrencyAmountComponent.prototype.isReadOnly;
    /** @type {?} */
    CurrencyAmountComponent.prototype.placeholder;
    /** @type {?} */
    CurrencyAmountComponent.prototype.propertyName;
    /** @type {?} */
    CurrencyAmountComponent.prototype.showCurrency;
    /** @type {?} */
    CurrencyAmountComponent.prototype.ngFormObject;
    /** @type {?} */
    CurrencyAmountComponent.prototype.currencyAmountChange;
    /** @type {?} */
    CurrencyAmountComponent.prototype.currencies;
    /** @type {?} */
    CurrencyAmountComponent.prototype.form;
    /** @type {?} */
    CurrencyAmountComponent.prototype.ngControlAmount;
    /** @type {?} */
    CurrencyAmountComponent.prototype.ngControlCurrency;
    /**
     * @type {?}
     * @private
     */
    CurrencyAmountComponent.prototype.classificationService;
    /**
     * @type {?}
     * @private
     */
    CurrencyAmountComponent.prototype.errorMessageService;
    /**
     * @type {?}
     * @private
     */
    CurrencyAmountComponent.prototype.formObject;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/error-display/error-display.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorDisplayComponent {
    /**
     * @param {?} errorService
     * @param {?} dialog
     */
    constructor(errorService, dialog) {
        this.errorService = errorService;
        this.dialog = dialog;
        this.showDialog = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!Utils.isNullEmptyOrUndefined(this.source)) {
            this.sources = [];
            this.source = this.source.toLowerCase();
            this.sources = this.source.split(',');
        }
        // tslint:disable-next-line: max-line-length
        // if (Utils.isNullEmptyOrUndefined(this.errorService.errorMessagesSubject.observers) || this.errorService.errorMessagesSubject.observers.length < 1)
        this.subscriptionSubscriber = this.errorService.errorMessagesSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (this.sources !== undefined) {
                /** @type {?} */
                const myErrors = this.sources.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                y => y === x.source));
                if (myErrors !== undefined)
                    if (x.isCleanup === true)
                        this.errors = [];
                    else 
                    // this.errors = x.errors;
                    if (this.showDialog && x.errors !== undefined && x.errors.length > 0)
                        this.dialog.open(ErrorDialogComponent, {
                            data: { errors: x.errors }, panelClass: 'dialog-error'
                        });
                    else
                        this.errors = x.errors;
            }
            else
                this.errors = x.errors;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (!this.subscriptionSubscriber.closed)
            this.subscriptionSubscriber.unsubscribe();
    }
}
ErrorDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-error-display',
                template: "<div>\r\n  <div fxLayout=\"column\">\r\n    <span fxFlex class=\"mat-h4 m-t-15 mat-error\" *ngFor=\"let error of errors\">\r\n      {{error}}\r\n    </span>\r\n  </div>\r\n</div>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ErrorDisplayComponent.ctorParameters = () => [
    { type: ErrorMessagesService },
    { type: MatDialog }
];
ErrorDisplayComponent.propDecorators = {
    errors: [{ type: Input }],
    source: [{ type: Input }],
    showDialog: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ErrorDisplayComponent.prototype.errors;
    /** @type {?} */
    ErrorDisplayComponent.prototype.source;
    /** @type {?} */
    ErrorDisplayComponent.prototype.showDialog;
    /** @type {?} */
    ErrorDisplayComponent.prototype.sources;
    /** @type {?} */
    ErrorDisplayComponent.prototype.subscription;
    /** @type {?} */
    ErrorDisplayComponent.prototype.subscriptionSubscriber;
    /**
     * @type {?}
     * @private
     */
    ErrorDisplayComponent.prototype.errorService;
    /** @type {?} */
    ErrorDisplayComponent.prototype.dialog;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/general-error-page/general-error-page.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GeneralErrorPageComponent {
    /**
     * @param {?} translationService
     */
    constructor(translationService) {
        this.translationService = translationService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
GeneralErrorPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-general-error-page',
                template: "<div>\n  <span class=\"h2\">{{'Unexpected error happened, please try again' | translate: translationService.cultureCode}}</span>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
GeneralErrorPageComponent.ctorParameters = () => [
    { type: TranslationService }
];
if (false) {
    /** @type {?} */
    GeneralErrorPageComponent.prototype.translationService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/input-validation-message/input-validation-message.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputValidationMessageComponent {
    /**
     * @param {?} errorMessageService
     */
    constructor(errorMessageService) {
        this.errorMessageService = errorMessageService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // TODO: fix logic
        this.errorMessageService.errorPropertyMessageSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (this.propertyName === x.propertyName && x.isCleanup === false)
                this.errors = x.errorMessage.split('###');
            else if (this.propertyName === x.propertyName && x.isCleanup === true)
                this.errors = [];
        }));
        this.errorMessageService.removeFormErrorsSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.errors = [];
        }));
    }
}
InputValidationMessageComponent.decorators = [
    { type: Component, args: [{
                selector: '[app-input-validation-message]',
                template: "<span *ngFor=\"let error of errors\">{{error}}</span>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
InputValidationMessageComponent.ctorParameters = () => [
    { type: ErrorMessagesService }
];
InputValidationMessageComponent.propDecorators = {
    propertyName: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    InputValidationMessageComponent.prototype.propertyName;
    /** @type {?} */
    InputValidationMessageComponent.prototype.errors;
    /**
     * @type {?}
     * @private
     */
    InputValidationMessageComponent.prototype.errorMessageService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingService {
    // timeout: any;
    constructor() {
        this.loadingSubject = new Subject();
        this.moduleLoadingSubject = new Subject();
    }
    /**
     * @param {?} loading
     * @return {?}
     */
    loader(loading) {
        this.loadingSubject.next(loading);
        // if (loading === true) {
        //     this.timeout = setTimeout(() => this.loadingSubject.next(false), 120000);
        // } else {
        //   if (this.timeout !== undefined)
        //     clearTimeout(this.timeout);
        // }
    }
    /**
     * @param {?} loading
     * @return {?}
     */
    moduleLoading(loading) {
        this.moduleLoadingSubject.next(loading);
    }
}
LoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LoadingService.ctorParameters = () => [];
/** @nocollapse */ LoadingService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(); }, token: LoadingService, providedIn: "root" });
if (false) {
    /** @type {?} */
    LoadingService.prototype.loadingSubject;
    /** @type {?} */
    LoadingService.prototype.moduleLoadingSubject;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/loader/loader.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoaderComponent {
    /**
     * @param {?} loaderService
     * @param {?} cd
     */
    constructor(loaderService, cd) {
        this.loaderService = loaderService;
        this.cd = cd;
        this.loadingStatus = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loaderService.loadingSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (x === true)
                this.loadingStatus++;
            else
                this.loadingStatus--;
            if (this.loadingStatus < 0)
                this.loadingStatus = 0;
            this.cd.markForCheck();
        }));
    }
}
LoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-loader',
                template: "<div class=\" loading-shade\" *ngIf=\"loadingStatus > 0\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
LoaderComponent.ctorParameters = () => [
    { type: LoadingService },
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    LoaderComponent.prototype.loadingStatus;
    /**
     * @type {?}
     * @private
     */
    LoaderComponent.prototype.loaderService;
    /**
     * @type {?}
     * @private
     */
    LoaderComponent.prototype.cd;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/notification-dialog-unsaved/notification-dialog-unsaved.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotificationDialogUnsavedComponent {
    /**
     * @param {?} data
     * @param {?} dialogRef
     * @param {?} translateService
     */
    constructor(data, dialogRef, translateService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.translateService = translateService;
        this.saveDataText = 'Save data?';
        this.bodyText = 'You have unsaved changes! Do you want to continue?';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!Utils.isNullEmptyOrUndefined(this.data)) {
            if (!Utils.isNullEmptyOrUndefined(this.data.saveDataText))
                this.saveDataText = this.data.saveDataText;
            if (!Utils.isNullEmptyOrUndefined(this.data.bodyText))
                this.bodyText = this.data.bodyText;
        }
    }
}
NotificationDialogUnsavedComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-notification-dialog-unsaved',
                template: "<h1 mat-dialog-title>{{saveDataText | translate : translateService.cultureCode}}</h1>\r\n<div mat-dialog-content>\r\n    <mat-card>\r\n        <mat-card-content>\r\n           <div>{{bodyText | translate : translateService.cultureCode}}</div>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n</div>\r\n<div mat-dialog-actions class=\"m-t-10\">\r\n  <button mat-dialog-close mat-raised-button color=\"accent\">{{'No' | translate : translateService.cultureCode}}</button>\r\n  <button  mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\">{{'Yes' | translate : translateService.cultureCode}}</button>\r\n</div>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
NotificationDialogUnsavedComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: MatDialogRef },
    { type: TranslationService }
];
if (false) {
    /** @type {?} */
    NotificationDialogUnsavedComponent.prototype.saveDataText;
    /** @type {?} */
    NotificationDialogUnsavedComponent.prototype.bodyText;
    /** @type {?} */
    NotificationDialogUnsavedComponent.prototype.data;
    /** @type {?} */
    NotificationDialogUnsavedComponent.prototype.dialogRef;
    /** @type {?} */
    NotificationDialogUnsavedComponent.prototype.translateService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/POCO/Quantity.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Quantity {
}
if (false) {
    /** @type {?} */
    Quantity.prototype.amount;
    /** @type {?} */
    Quantity.prototype.unitOfMeasure;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/quantity/quantity.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QuantityComponent {
    /**
     * @param {?} translationService
     * @param {?} form
     */
    constructor(translationService, form) {
        this.translationService = translationService;
        this.form = form;
        this.quantityChange = new EventEmitter();
        this.units = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getUnits();
        if (this.propertyName === undefined)
            this.propertyName = Utils.newTechnicalNumber();
        this.ngControlAmount = new FormControl();
        this.ngControlUnitOfMeasure = new FormControl();
        if (this.form !== undefined) {
            this.form.form.addControl(this.propertyName + 'Amount', this.ngControlAmount);
            this.form.form.addControl(this.propertyName + 'UnitOfMeasure', this.ngControlUnitOfMeasure);
        }
    }
    /**
     * @return {?}
     */
    getUnits() {
        // this.classificationService.getClassificationValues('Quantity').subscribe(x => {
        //   if (Utils.isNullEmptyOrUndefined(x) || Utils.isNullEmptyOrUndefined(x.value))
        //     return;
        //   this.units = x.value;
        //   const defaultCurrency = this.units.find(y => y.isDefaultValue === true);
        //   if (defaultCurrency !== undefined)
        //     this.quantity.unitOfMeasureId = defaultCurrency.value;
        // });
    }
}
QuantityComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-quantity',
                template: "<form class=\"quantity-component\" formValidator>\r\n    <div class=\"\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1%\" fxLayoutAlign=\"center\">\r\n        <div fxFlex=\"80%\">\r\n          <mat-form-field>\r\n              <input matInput type=\"number\" [name]=\"propertyName+'Amount'\" placeholder=\"{{placeholder}}\" [readonly]=\"isReadOnly\" [(ngModel)]=\"quantity.amount\" (ngModelChange)=\"quantityChange.emit(quantity)\" step=\".01\">\r\n              <mat-error app-input-validation-message [propertyName]=\"propertyName+'Amount'\"></mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"20%\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" [name]=\"propertyName+'UnitOfMeasure'\" placeholder=\"{{'Unit of measure'| translate : translationService.cultureCode}}\" [(ngModel)]=\"quantity.unitOfMeasure\" (ngModelChange)=\"quantityChange.emit(quantity)\">\r\n            <mat-error app-input-validation-message [propertyName]=\"propertyName+'UnitOfMeasure'\"></mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n  </form>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
QuantityComponent.ctorParameters = () => [
    { type: TranslationService },
    { type: NgForm }
];
QuantityComponent.propDecorators = {
    quantity: [{ type: Input }],
    isReadOnly: [{ type: Input }],
    placeholder: [{ type: Input }],
    propertyName: [{ type: Input }],
    quantityChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    QuantityComponent.prototype.quantity;
    /** @type {?} */
    QuantityComponent.prototype.isReadOnly;
    /** @type {?} */
    QuantityComponent.prototype.placeholder;
    /** @type {?} */
    QuantityComponent.prototype.propertyName;
    /** @type {?} */
    QuantityComponent.prototype.ngControlAmount;
    /** @type {?} */
    QuantityComponent.prototype.ngControlUnitOfMeasure;
    /** @type {?} */
    QuantityComponent.prototype.quantityChange;
    /** @type {?} */
    QuantityComponent.prototype.units;
    /** @type {?} */
    QuantityComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    QuantityComponent.prototype.form;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/search.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchService {
    /**
     * @param {?} apiService
     */
    constructor(apiService) {
        this.apiService = apiService;
    }
    /**
     * @param {?} searchParams
     * @return {?}
     */
    search(searchParams) {
        /** @type {?} */
        let params = new HttpParams();
        params = params.append('typeName', searchParams.typename).append('searchTerm', searchParams.searchTerm)
            .append('skip', '' + searchParams.skip).append('top', '' + searchParams.top);
        return this.apiService.get('common', 'search', params);
    }
}
SearchService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SearchService.ctorParameters = () => [
    { type: ApiService }
];
/** @nocollapse */ SearchService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SearchService_Factory() { return new SearchService(ɵɵinject(ApiService)); }, token: SearchService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype.apiService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/components/typeahead-input/typeahead-input.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TypeaheadInputComponent {
    /**
     * @param {?} searchService
     * @param {?} translateService
     * @param {?} formObject
     * @param {?} errorMessageService
     */
    constructor(searchService, translateService, formObject, errorMessageService) {
        this.searchService = searchService;
        this.translateService = translateService;
        this.formObject = formObject;
        this.errorMessageService = errorMessageService;
        this.typeaheadSkipValue = 6;
        this.minNumOfCharToSearch = 3;
        this.readonly = false;
        this.hasErrors = false;
        this.isLoading = false;
        this.nextPage = new Subject();
        this.valueChosen = false;
        this.typeaheadValueChange = new EventEmitter();
        this.typeaheadSelectedValueChange = new EventEmitter();
        this.inputChangeSubject = new Subject();
        this.nextPage = new Subject();
        this.skip = 0;
        this.top = this.typeaheadSkipValue;
        this.results = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        merge(this.inputChangeSubject.pipe(debounceTime(400), distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            if (b.length < this.minNumOfCharToSearch || a === b)
                return true;
            this.resetFilter();
            return false;
        }))), this.nextPage.pipe(distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            if (a === b)
                return true;
            return false;
        }))))
            .pipe(switchMap((/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            if (Utils.isNullEmptyOrUndefined(this.currentValue) || this.currentValue.length < this.minNumOfCharToSearch) {
                this.resetFilter();
                return of({ value: [] });
            }
            /** @type {?} */
            let searchTermJson = null;
            this.isLoading = true;
            if (this.filterFormatFn === undefined)
                searchTermJson = { name: this.currentValue };
            else
                searchTermJson = this.filterFormatFn(this.currentValue);
            return this.searchService.search({
                typename: this.typename, searchTerm: JSON.stringify(searchTermJson),
                skip: this.skip, top: this.top
            });
        })))
            .subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (x.value.length === this.typeaheadSkipValue)
                this.skip += this.typeaheadSkipValue;
            this.results = [...this.results, ...x.value];
            this.autocomplete.opened.next();
            this.isLoading = false;
        }));
        if (this.propertyName === undefined)
            this.propertyName = Utils.newTechnicalNumber();
        if (Utils.isNullEmptyOrUndefined(this.ngFormObject))
            this.form = this.ngFormObject;
        if (Utils.isNullEmptyOrUndefined(this.form)) {
            this.form = this.formObject;
        }
        this.ngControl = new FormControl();
        if (this.form !== undefined)
            this.form.form.addControl(this.propertyName, this.ngControl);
        this.errorMessageService.errorPropertyMessageSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === false) {
                this.form.form.get(x.propertyName).setErrors({ incorrect: true });
                this.form.form.get(x.propertyName).markAsDirty();
                this.form.form.get(x.propertyName).markAsTouched();
                this.hasErrors = true;
            }
            else if (!Utils.isNullEmptyOrUndefined(this.form.form.get(x.propertyName)) && x.isCleanup === true) {
                this.hasErrors = false;
                this.form.form.get(x.propertyName).setErrors(null);
            }
        }));
        this.errorMessageService.removeFormErrorsSubject.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.hasErrors = false;
            if (!Utils.isNullEmptyOrUndefined(this.form.form.get(this.propertyName) && this.propertyName !== undefined))
                this.form.form.get(this.propertyName).setErrors(null);
        }));
        if (this.selectedValue !== undefined && this.selectedValue.hasOwnProperty('id'))
            this.valueChosen = true;
    }
    /**
     * @return {?}
     */
    onScroll() {
        this.nextPage.next(this.skip);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    search(event) {
        this.currentValue = event.target.value;
        if (Utils.isNullEmptyOrUndefined(this.currentValue)) {
            this.skip = 0;
            return;
        }
        if (event.keyCode === 8 || event.keyCode === 46)
            this.clearSelectedValue();
        this.inputChangeSubject.next(this.currentValue);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    optionSelected(event) {
        this.typeaheadValue = event.option.value.id;
        this.selectedValue = event.option.value;
        this.valueChosen = true;
        this.currentValue = this.displayResultFn(event.option.value);
        this.typeaheadSelectedValueChange.emit(this.selectedValue);
        this.typeaheadValueChange.emit(this.typeaheadValue);
        /** @type {?} */
        const pname = this.propertyName;
        this.form.form.markAsDirty();
        this.form.form.patchValue({ pname: this.typeaheadValue });
    }
    /**
     * @return {?}
     */
    clearSelectedValue() {
        this.typeaheadValue = undefined;
        this.selectedValue = undefined;
        this.currentValue = '';
        this.valueChosen = false;
        this.typeaheadSelectedValueChange.emit(this.selectedValue);
        this.typeaheadValueChange.emit(this.typeaheadValue);
    }
    /**
     * @return {?}
     */
    get checkHasValue() {
        return !this.valueChosen
            && (this.selectedValue === undefined || this.selectedValue === null || !this.selectedValue.hasOwnProperty('id'));
    }
    /**
     * @private
     * @return {?}
     */
    resetFilter() {
        this.results = [];
        this.skip = 0;
        this.valueChosen = false;
        this.top = this.typeaheadSkipValue;
    }
}
TypeaheadInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-typeahead-input',
                template: "<form formValidator>\r\n  <mat-form-field>\r\n    <input matInput [name]=\"propertyName\" placeholder=\"{{placeholder}}\" readonly=\"{{readonly}}\" [matAutocomplete]=\"autocomplete\" (keyup)=\"search($event)\" [(ngModel)]=\"selectedValue\" >\r\n    <mat-icon matSuffix *ngIf=\"checkHasValue\" class=\"errorValue\" matTooltip=\"Value not selected\">error_outline</mat-icon>\r\n    <mat-icon matSuffix *ngIf=\"isLoading\" matTooltip=\"Values loading\">autorenew</mat-icon>\r\n    <mat-autocomplete #autocomplete=\"matAutocomplete\" [displayWith]=\"displayResultFn\" (optionsScroll)=\"onScroll()\" (optionSelected)=\"optionSelected($event)\" showPanel=\"true\">\r\n      <mat-option *ngFor=\"let result of results\" [value]=\"result\">\r\n        <span>{{displayResultFn(result)}}</span>\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n    <mat-hint [hidden]=\"!hasErrors\">{{'Type to search' | translate: translateService.cultureCode}}</mat-hint>\r\n    <mat-error app-input-validation-message [propertyName]=\"propertyName\"></mat-error>\r\n  </mat-form-field>\r\n</form>\r\n",
                styles: [".errorValue{color:#c40308}"]
            }] }
];
/** @nocollapse */
TypeaheadInputComponent.ctorParameters = () => [
    { type: SearchService },
    { type: TranslationService },
    { type: NgForm },
    { type: ErrorMessagesService }
];
TypeaheadInputComponent.propDecorators = {
    typeaheadValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    typename: [{ type: Input }],
    selectedValue: [{ type: Input }],
    filterFormatFn: [{ type: Input }],
    displayResultFn: [{ type: Input }],
    propertyName: [{ type: Input }],
    readonly: [{ type: Input }],
    ngFormObject: [{ type: Input }],
    typeaheadValueChange: [{ type: Output }],
    typeaheadSelectedValueChange: [{ type: Output }],
    autocomplete: [{ type: ViewChild, args: ['autocomplete', { static: false },] }],
    autocompleteTrigger: [{ type: ViewChild, args: [MatAutocompleteTrigger, { static: false },] }]
};
if (false) {
    /** @type {?} */
    TypeaheadInputComponent.prototype.typeaheadSkipValue;
    /** @type {?} */
    TypeaheadInputComponent.prototype.minNumOfCharToSearch;
    /** @type {?} */
    TypeaheadInputComponent.prototype.typeaheadValue;
    /** @type {?} */
    TypeaheadInputComponent.prototype.placeholder;
    /** @type {?} */
    TypeaheadInputComponent.prototype.typename;
    /** @type {?} */
    TypeaheadInputComponent.prototype.selectedValue;
    /** @type {?} */
    TypeaheadInputComponent.prototype.filterFormatFn;
    /** @type {?} */
    TypeaheadInputComponent.prototype.displayResultFn;
    /** @type {?} */
    TypeaheadInputComponent.prototype.propertyName;
    /** @type {?} */
    TypeaheadInputComponent.prototype.readonly;
    /** @type {?} */
    TypeaheadInputComponent.prototype.ngFormObject;
    /** @type {?} */
    TypeaheadInputComponent.prototype.results;
    /** @type {?} */
    TypeaheadInputComponent.prototype.skip;
    /** @type {?} */
    TypeaheadInputComponent.prototype.top;
    /** @type {?} */
    TypeaheadInputComponent.prototype.currentValue;
    /** @type {?} */
    TypeaheadInputComponent.prototype.hasErrors;
    /** @type {?} */
    TypeaheadInputComponent.prototype.inputChangeSubject;
    /** @type {?} */
    TypeaheadInputComponent.prototype.ngControl;
    /** @type {?} */
    TypeaheadInputComponent.prototype.isLoading;
    /** @type {?} */
    TypeaheadInputComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    TypeaheadInputComponent.prototype.nextPage;
    /** @type {?} */
    TypeaheadInputComponent.prototype.valueChosen;
    /** @type {?} */
    TypeaheadInputComponent.prototype.typeaheadValueChange;
    /** @type {?} */
    TypeaheadInputComponent.prototype.typeaheadSelectedValueChange;
    /** @type {?} */
    TypeaheadInputComponent.prototype.autocomplete;
    /** @type {?} */
    TypeaheadInputComponent.prototype.autocompleteTrigger;
    /**
     * @type {?}
     * @private
     */
    TypeaheadInputComponent.prototype.searchService;
    /** @type {?} */
    TypeaheadInputComponent.prototype.translateService;
    /**
     * @type {?}
     * @private
     */
    TypeaheadInputComponent.prototype.formObject;
    /**
     * @type {?}
     * @private
     */
    TypeaheadInputComponent.prototype.errorMessageService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/shared.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedModule {
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ActionsRibbonComponent,
                    BaseSelectedTabComponent,
                    ClassificationGroupInputComponent,
                    ClassificationInputComponent,
                    ConfirmDialogComponent,
                    CurrencyAmountComponent,
                    ErrorDisplayComponent,
                    ErrorDialogComponent,
                    GeneralErrorPageComponent,
                    InputValidationMessageComponent,
                    LoaderComponent,
                    NotificationDialogUnsavedComponent,
                    QuantityComponent,
                    TypeaheadInputComponent,
                    ConfirmActionDirective,
                    FormValidatorDirective,
                    NumberFormatterDirective,
                    BooleanEvaluateStatusToStringPipe,
                    BooleanToYesNoPipe,
                    ClassificationValueGet,
                    ClassificationValuePipe,
                    CurrencyPipe,
                    DateTimeFormatPipe,
                    EmptyStringToDefaultPipe,
                    LifecycleStatusPipe,
                    QuantityPipe,
                    TranslatePipe,
                    DecimalFormatterDirective,
                    OptionsScrollDirective
                ],
                imports: [
                    CommonModule,
                    MaterialModule
                ],
                exports: [
                    ConfirmActionDirective,
                    FormValidatorDirective,
                    NumberFormatterDirective,
                    BooleanEvaluateStatusToStringPipe,
                    BooleanToYesNoPipe,
                    ClassificationValueGet,
                    ClassificationValuePipe,
                    CurrencyPipe,
                    DateTimeFormatPipe,
                    EmptyStringToDefaultPipe,
                    LifecycleStatusPipe,
                    QuantityPipe,
                    TranslatePipe,
                    ActionsRibbonComponent,
                    BaseSelectedTabComponent,
                    ClassificationGroupInputComponent,
                    ClassificationInputComponent,
                    ConfirmDialogComponent,
                    CurrencyAmountComponent,
                    ErrorDisplayComponent,
                    ErrorDialogComponent,
                    GeneralErrorPageComponent,
                    InputValidationMessageComponent,
                    LoaderComponent,
                    NotificationDialogUnsavedComponent,
                    QuantityComponent,
                    TypeaheadInputComponent,
                ],
                entryComponents: [
                    ErrorDialogComponent,
                    ConfirmDialogComponent,
                    NotificationDialogUnsavedComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/command.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommandService {
    /**
     * @param {?} apiService
     * @param {?} translateService
     */
    constructor(apiService, translateService) {
        this.apiService = apiService;
        this.translateService = translateService;
        this.locationCache = {};
    }
    // TODO: write calling query method using ICommandContract
    /**
     * @param {?} zone
     * @param {?} route
     * @param {?} contract
     * @return {?}
     */
    post(zone, route, contract) {
        return this.apiService.post(zone, route, undefined, contract);
    }
}
CommandService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CommandService.ctorParameters = () => [
    { type: ApiService },
    { type: TranslationService }
];
/** @nocollapse */ CommandService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CommandService_Factory() { return new CommandService(ɵɵinject(ApiService), ɵɵinject(TranslationService)); }, token: CommandService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommandService.prototype.locationCache;
    /**
     * @type {?}
     * @private
     */
    CommandService.prototype.apiService;
    /**
     * @type {?}
     * @private
     */
    CommandService.prototype.translateService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/query.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class QueryService {
    /**
     * @param {?} apiService
     * @param {?} http
     */
    constructor(apiService, http) {
        this.apiService = apiService;
        this.http = http;
    }
    /**
     * @param {?} zone
     * @param {?} route
     * @param {?} contract
     * @return {?}
     */
    get(zone, route, contract) {
        /** @type {?} */
        let params = new HttpParams();
        /** @type {?} */
        const vl = Object.entries(contract);
        for (let i = 0; i < vl.length; i++) {
            /** @type {?} */
            const val = vl[i];
            params = params.append(val[0], val[1]);
        }
        return this.apiService.get(zone, route, params);
    }
    /**
     * @param {?} zone
     * @param {?} path
     * @return {?}
     */
    getBlobDocument(zone, path) {
        return this.http.get(`${this.apiService.getApiUrl()}/${zone}/${path}`, { responseType: 'blob', observe: 'response' });
    }
}
QueryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
QueryService.ctorParameters = () => [
    { type: ApiService },
    { type: HttpClient }
];
/** @nocollapse */ QueryService.ngInjectableDef = ɵɵdefineInjectable({ factory: function QueryService_Factory() { return new QueryService(ɵɵinject(ApiService), ɵɵinject(HttpClient)); }, token: QueryService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    QueryService.prototype.apiService;
    /**
     * @type {?}
     * @private
     */
    QueryService.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/paginator-i18n.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginatorI18nService extends MatPaginatorIntl {
    /**
     * @param {?} translationService
     */
    constructor(translationService) {
        super();
        this.translationService = translationService;
        this.getRangeLabel = (/**
         * @param {?} page
         * @param {?} pageSize
         * @param {?} length
         * @return {?}
         */
        (page, pageSize, length) => {
            if (length === 0 || pageSize === 0) {
                return this.zeroOfLabel + ' ' + length;
            }
            length = Math.max(length, 0);
            /** @type {?} */
            const startIndex = page * pageSize;
            /** @type {?} */
            const endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
            return startIndex + 1 + ' - ' + endIndex + ' ' + this.ofLabel + ' ' + length;
        });
        this.itemsPerPageLabel = this.translationService.getForKey('Items per page');
        this.nextPageLabel = this.translationService.getForKey('Next page');
        this.ofLabel = this.translationService.getForKey('of');
        this.previousPageLabel = this.translationService.getForKey('Previous page');
        this.firstPageLabel = this.translationService.getForKey('First page');
        this.lastPageLabel = this.translationService.getForKey('Last page');
        this.zeroOfLabel = this.translationService.getForKey('0 of');
        this.changes.next();
        this.translationService.cultureChange.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            this.itemsPerPageLabel = this.translationService.getForKey('Items per page');
            this.nextPageLabel = this.translationService.getForKey('Next page');
            this.ofLabel = this.translationService.getForKey('of');
            this.previousPageLabel = this.translationService.getForKey('Previous page');
            this.firstPageLabel = this.translationService.getForKey('First page');
            this.lastPageLabel = this.translationService.getForKey('Last page');
            this.zeroOfLabel = this.translationService.getForKey('0 of');
            this.changes.next();
        }));
    }
}
PaginatorI18nService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PaginatorI18nService.ctorParameters = () => [
    { type: TranslationService }
];
/** @nocollapse */ PaginatorI18nService.ngInjectableDef = ɵɵdefineInjectable({ factory: function PaginatorI18nService_Factory() { return new PaginatorI18nService(ɵɵinject(TranslationService)); }, token: PaginatorI18nService, providedIn: "root" });
if (false) {
    /** @type {?} */
    PaginatorI18nService.prototype.itemsPerPageLabel;
    /** @type {?} */
    PaginatorI18nService.prototype.nextPageLabel;
    /** @type {?} */
    PaginatorI18nService.prototype.previousPageLabel;
    /** @type {?} */
    PaginatorI18nService.prototype.firstPageLabel;
    /** @type {?} */
    PaginatorI18nService.prototype.lastPageLabel;
    /** @type {?} */
    PaginatorI18nService.prototype.ofLabel;
    /** @type {?} */
    PaginatorI18nService.prototype.zeroOfLabel;
    /** @type {?} */
    PaginatorI18nService.prototype.getRangeLabel;
    /**
     * @type {?}
     * @private
     */
    PaginatorI18nService.prototype.translationService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: shared/services/unsaved-data-notification.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnsavedDataNotificationService {
    /**
     * @param {?} dialog
     */
    constructor(dialog) {
        this.dialog = dialog;
        this.hasChangedData = false;
    }
    /**
     * @param {?} ngForm
     * @return {?}
     */
    startTracking(ngForm) {
        this.currentForm = ngForm;
        this.currentForm.form.markAsPristine();
        this.formChangesSubscription = ngForm.form.valueChanges.subscribe((/**
         * @param {?} x
         * @return {?}
         */
        x => {
            if (this.currentForm.form.dirty)
                this.hasChangedData = true;
        }));
    }
    /**
     * @return {?}
     */
    trackingCheckpoint() {
        this.currentForm.form.markAsPristine();
        this.hasChangedData = false;
    }
    /**
     * @return {?}
     */
    stopTracking() {
        this.hasChangedData = false;
        this.formChangesSubscription.unsubscribe();
    }
    /**
     * @param {?} action
     * @param {?=} fallbackAction
     * @param {?=} modalData
     * @return {?}
     */
    doActionWithCheckUnsaved(action, fallbackAction, modalData) {
        if (!this.hasChangedData) {
            action();
            return;
        }
        /** @type {?} */
        const dialogRef = this.dialog.open(NotificationDialogUnsavedComponent, {
            width: '356px',
            data: modalData
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result === true) {
                this.hasChangedData = false;
                action();
            }
            else {
                if (fallbackAction !== undefined)
                    fallbackAction();
            }
        }));
    }
    /**
     * @param {?} hasChanges
     * @param {?} noChanges
     * @param {?=} modalData
     * @return {?}
     */
    checkChangesAction(hasChanges, noChanges, modalData) {
        if (!this.hasChangedData) {
            noChanges();
            return;
        }
        /** @type {?} */
        const dialogRef = this.dialog.open(NotificationDialogUnsavedComponent, {
            width: '356px',
            data: modalData
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result === true) {
                this.hasChangedData = false;
                hasChanges();
            }
            else
                noChanges();
        }));
    }
}
UnsavedDataNotificationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UnsavedDataNotificationService.ctorParameters = () => [
    { type: MatDialog }
];
if (false) {
    /** @type {?} */
    UnsavedDataNotificationService.prototype.hasChangedData;
    /** @type {?} */
    UnsavedDataNotificationService.prototype.formChangesSubscription;
    /** @type {?} */
    UnsavedDataNotificationService.prototype.currentForm;
    /** @type {?} */
    UnsavedDataNotificationService.prototype.dialog;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ssoe-client-shared.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ActionsRibbonService, ApiService, BooleanEvaluateStatusToStringPipe, BooleanToYesNoPipe, ClassificationService, ClassificationValueGet, ClassificationValuePipe, CommandService, ConfigService, ConfirmActionDirective, CurrencyPipe, DateTimeFormatPipe, DecimalFormatterDirective, EmptyStringToDefaultPipe, ErrorMessagesService, FormValidatorDirective, LifecycleStatusPipe, LoadingService, NumberFormatterDirective, OptionsScrollDirective, PaginatorI18nService, QuantityPipe, QueryService, SearchService, SharedModule, TranslatePipe, TranslationService, UnsavedDataNotificationService, ActionsRibbonComponent as ɵa, BaseSelectedTabComponent as ɵb, ClassificationGroupInputComponent as ɵc, ClassificationInputComponent as ɵd, ConfirmDialogComponent as ɵe, CurrencyAmountComponent as ɵf, ErrorDisplayComponent as ɵg, ErrorDialogComponent as ɵh, GeneralErrorPageComponent as ɵi, InputValidationMessageComponent as ɵj, LoaderComponent as ɵk, NotificationDialogUnsavedComponent as ɵl, QuantityComponent as ɵm, TypeaheadInputComponent as ɵn, MaterialModule as ɵo };
//# sourceMappingURL=ssoe-client-shared.js.map
