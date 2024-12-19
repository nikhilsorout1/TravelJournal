import globaImage from "../images/globe.png"
export default function Header() {
    return (
        <header>
            <img src={globaImage} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}