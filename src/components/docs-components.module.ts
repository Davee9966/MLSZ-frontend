import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  CalloutModule,
  NavModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';
import { DocsExampleComponent } from './docs-example/docs-example.component';
import { DocsLinkComponent } from './docs-link/docs-link.component';
import { DocsCalloutComponent } from './docs-callout/docs-callout.component';
import { UsersComponent } from './users/users.component';
import { FieldsComponent } from './fields/fields.component';

@NgModule({
  declarations: [
    DocsExampleComponent,
    DocsLinkComponent,
    DocsCalloutComponent,
    FieldsComponent,
  ],
  exports: [DocsExampleComponent, DocsLinkComponent, DocsCalloutComponent],
  imports: [
    CommonModule,
    NavModule,
    IconModule,
    RouterModule,
    TabsModule,
    UtilitiesModule,
    CalloutModule,
  ],
})
export class DocsComponentsModule {}
