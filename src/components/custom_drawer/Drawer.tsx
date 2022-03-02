import '../../styles/drawer.scss';
import DrawerMenu from './DrawerMenu';


export default function Drawer(props: { data: any }) {


    let systems = props.data.Systems;

    let comps_room;
    if (Object.keys(systems).length > 1) {
        comps_room = Object.values(systems).map((system_data, index) => <DrawerMenu label={`System ${index + 1}`} data={system_data} single={false}/>)
    } else {
        comps_room = [<DrawerMenu label={`System 1`} data={Object.values(systems)[0]} single={true} />]
    }


    return (
        <div className='drawer'>          
            {comps_room}
        </div>
    )



}