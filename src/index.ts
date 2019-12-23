import scenes from './scene'
import assets from './assets'
import global from './global'
import components from './components'
import {IVFTemplate, LoadMode, ScaleMode} from "../types/IVFTemplate";

const Main: IVFTemplate = {
    assets,
    global,
    scenes,
    width: 890,
    components,
    height: 500,
    baseUrl: '',
    name: 'STC01',
    conversion: '',
    version: '0.0.1',
    loadMode: LoadMode.all,
    scaleMode: ScaleMode.showAll
}

export default Main;