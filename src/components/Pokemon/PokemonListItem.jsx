export const PokemonListItem = (
    {
        code,
        name,
        url,
        imgSprite = 'https://picsum.photos/id/2/48/48',
        onClickHandler = (e)=>{alert('Clicked');}
    }
)=>{
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png
    return (
        <div className="pokemonListItem">
            <img src={imgSprite} alt={name}/>
            <div>
                <strong>
                    {name}
                </strong>
            <button onClick={onClickHandler}>Ver Detalle</button>
            </div>
        </div>
    );
}