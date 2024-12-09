import Box from "./Sponsors_box"
import tinycolor from 'tinycolor2';

interface TierProps{
    array:[string]
    backgroundColor: string
    title: string
}
export default function TierSection(props: TierProps){ 
    const darkerColor = tinycolor(props.backgroundColor).darken(10).toString();
    return(    
    <div className="w-full" style={{ backgroundColor:props.backgroundColor, padding: '1rem 0' }}>
        <h2 className="text-white text-3xl font-bold mx-5 mb-3 w-fit" style={{borderBottom: `8px solid ${darkerColor}`}}>{props.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            {
            props.array.map(({ name, imageUrl, description, website  }, index) => (
            <div key={index} className="snap-start w-full">
              <Box name={name} imageUrl={imageUrl} description={description} website={website} />
            </div>))}
        </div>
    </div>

    )

}