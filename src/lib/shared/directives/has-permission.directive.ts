import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/core/services/activities.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[hasPermission]'
})
export class HasPermissionDirective implements OnInit {

  rendered = false;
  @Input('hasPermission') activityName: string;
  @Input() objectPermissions: string;
  @Input() expression: any;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private activityService: ActivitiesService) { }

  ngOnInit() {
    if (this.activityName !== undefined) {
      if (this.activityService.matchActivity(this.activityName)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.rendered = true;
      } else {
        this.viewContainer.clear();
        this.rendered = false;
      }
    }
    if (this.objectPermissions !== undefined) {
      if (this.objectPermissions.toLowerCase().indexOf(this.activityName.toLowerCase()) >= 0) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.rendered = true;
      } else {
        this.viewContainer.clear();
        this.rendered = false;
      }
    }

    this.activityService.activitiesChange.subscribe(x => {
      if (this.activityName !== undefined) {
        if (this.activityService.matchActivity(this.activityName)) {
          if (this.rendered === false) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.rendered = true;
          }
        } else {
          this.viewContainer.clear();
          this.rendered = false;
        }
      }
    });
  }
}
