import { useState } from 'react'


import { Button } from 'primereact/button';
import { TabMenu } from 'primereact/tabmenu';


export const NavBar = (props)=> {
    const [activeIndex, setActiveIndex] = useState(1);

    const items = [
        {label: 'DYALI  ', icon: ''},
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

  return (
    <div>
           
            <div className="card">
            
                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </div>
        </div>

  )
}


