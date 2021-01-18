export default function ListItem(props) {
    return (
        <div>
            {props.url}
            <button onClick={() => { navigator.clipboard.writeText(props.url) }}>Copy</button>
        </div>
    );
}
