// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import {CardComponent} from './card.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../button/button.component';


let declarations = [ButtonComponent]

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Controls/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: declarations,
      imports: [FontAwesomeModule],
    })
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const Default = () => ({
    moduleMetadata: {
        declarations
    },
    props: {
        headerText: 'Title',
        displayPreview: false,
    },
    template: ` <app-card [hasTopBar]="false">
                    <div header>
                        Header
                    </div>
                    <div well>
                        Well
                    </div>
                    <div content>
                        Content
                    </div>
                    <div footer>
                        Footer
                    </div>
                </app-card>`
})
export const DefaultNoContent = () => ({
    moduleMetadata: {
        declarations
    },
    props: {
        headerText: 'Title',
        displayPreview: false,
    },
    template: ` <app-card [hasTopBar]="false">
                    <div header>
                        Header
                    </div>
                    <div well>
                        Well
                    </div>
                    <div footer>
                        Footer
                    </div>
                </app-card>`
})
export const DefaultNoWell = () => ({
    moduleMetadata: {
        declarations
    },
    props: {
        headerText: 'Title',
        displayPreview: false,
    },
    template: ` <app-card [hasTopBar]="false">
                    <div header>
                        Header
                    </div>
                    <div content>
                        Content
                    </div>
                    <div footer>
                        Footer
                    </div>
                </app-card>`
})
export const DefaultNoHeader = () => ({
    moduleMetadata: {
        declarations
    },
    props: {
        headerText: 'Title',
        displayPreview: false,
    },
    template: ` <app-card [hasTopBar]="false">
                    <div well>
                        Well
                    </div>
                    <div content>
                        Content
                    </div>
                    <div footer>
                        Footer
                    </div>
                </app-card>`
})
export const DefaultNoFooter = () => ({
    moduleMetadata: {
        declarations
    },
    props: {
        headerText: 'Title',
        displayPreview: false,
    },
    template: ` <app-card [hasTopBar]="false">
                    <div header>
                        Header
                    </div>
                    <div well>
                        Well
                    </div>
                    <div content>
                        Content
                    </div>
                </app-card>`
})
export const DefaultWithTopBar = () => ({
    moduleMetadata: {
        declarations
    },
    props: {
        headerText: 'Title',
        displayPreview: false,
    },
    template: ` <app-card [hasTopBar]="true">
                    <div header>
                        Header
                    </div>
                    <div well>
                        Well
                    </div>
                    <div content>
                        Content
                    </div>
                    <div footer>
                        Footer
                    </div>
                </app-card>`
})