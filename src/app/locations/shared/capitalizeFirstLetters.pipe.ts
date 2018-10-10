import {Pipe} from '@angular/core';
import {PipeTransform} from '@angular/core/src/change_detection/pipe_transform';
import * as _ from 'lodash';


@Pipe({name: 'capitalizeFirstLetters'})
export class CapitalizeFirstLettersPipe implements PipeTransform {
  transform(str: string): string {
    return _.startCase(_.toLower(str));
  }
}
