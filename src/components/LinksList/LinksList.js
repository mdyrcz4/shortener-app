import { ListGroup } from 'react-bootstrap'
import ListItem from '../ListItem/ListItem'
import { useState } from 'react';

export default function LinksList(props) {

    const [copiedUrl, setCopiedUrl] = useState('');

    const handleCopiedUrl = (url) => {
        setCopiedUrl(url);
    };

    const handleDeleteUrl = (url) => {
        props.handleDeleteUrl(url);
    }

    return (
        <ListGroup style={{ marginTop: '40px', marginBottom: '40px', height: '500px' }} className="overflow-auto">
            {
                props.items.map(item =>
                    <ListGroup.Item key={item.url}>
                        <ListItem
                            url={item.url}
                            original={item.original}
                            handleCopied={(url) => handleCopiedUrl(url)}
                            handleDelete={(url) => handleDeleteUrl(url)}
                            copied={copiedUrl === item.url}>
                        </ListItem>
                    </ListGroup.Item>)
            }
        </ListGroup>

    );
}