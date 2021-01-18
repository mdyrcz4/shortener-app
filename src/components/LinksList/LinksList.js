import { ListGroup } from 'react-bootstrap'
import ListItem from '../ListItem/ListItem'
import { useState } from 'react';

export default function LinksList(props) {

    const [copiedUrl, setCopiedUrl] = useState('');

    const handleCopiedUrl = (url) => {
        setCopiedUrl(url);
    };

    return (
        <ListGroup style={{ marginTop: '40px', marginBottom: '40px', height: '200px' }} className="overflow-auto">
            {
                props.items.map(item =>
                    <ListGroup.Item key={item.url}>
                        <ListItem
                            url={item.url}
                            original={item.original}
                            handleCopied={(url) => handleCopiedUrl(url)}
                            copied={copiedUrl === item.url}>
                        </ListItem>
                    </ListGroup.Item>)
            }
        </ListGroup>

    );
}