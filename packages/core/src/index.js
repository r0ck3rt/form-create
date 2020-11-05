import createFormCreate, {_vue as Vue} from './core/index';
import Creator, {creatorFactory, creatorTypeFactory} from './factory/creator';
import Handle from './core/handle';
import makerFactory from './factory/maker';
import Render from './core/render';
import BaseParser from './factory/parser';
import baseApi from './core/api';
import Manager from './factory/manager';
import {copyRule, copyRules, parseJson, toJson} from './core/util';

export {
    creatorFactory, creatorTypeFactory, Creator, Manager,
    Handle, makerFactory, Render, Vue, BaseParser, parseJson, toJson, baseApi, copyRule, copyRules
};

export default createFormCreate;
