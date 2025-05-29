import NavBar from '@/Components/NavBar'
import UpperHome from '@/Components/UpperHome';
import LowerHome from '@/Components/LowerHome';
import Separator from '@/Components/Separator'


function HomePage(){
    return (
    <>
      <NavBar backgroundColor='#771111' active="HOME"></NavBar>
      <div style={{padding: "0 40px", display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <UpperHome></UpperHome>
        <Separator />
        <LowerHome></LowerHome>
      </div>
    </>
    )
}

export default HomePage