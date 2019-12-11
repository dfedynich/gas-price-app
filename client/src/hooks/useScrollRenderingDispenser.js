import {useState, useEffect} from 'react';
import throttle from 'lodash.throttle';

export const useScrollRenderingDispenser = (items = [], pageSize = 5) => {
    const [pageNumber, setPageNumber] = useState(1);

    const onScroll = () => {
        if (checkIfNeedsMoreContent()) {
            setPageNumber(pageNumber => pageNumber + 1)
        }
    };

    const checkIfNeedsMoreContent = () => {
        if (pageNumber * pageSize >= items.length) {
            return false;
        }
        const pixelsFromWindowBottomToBottom = document.body.offsetHeight - window.scrollY - window.innerHeight;
        return pixelsFromWindowBottomToBottom < 100;
    };

    useEffect(() => {
        const onScrollThrottled = throttle(onScroll, 300);

        window.addEventListener('scroll', onScrollThrottled, false);

        return () => {
            console.log('rrr');
            window.removeEventListener('scroll', onScrollThrottled, false);
        };

    }, [items, pageSize]);

    return {dispensedItems: items.slice(0, pageNumber * pageSize)};
};