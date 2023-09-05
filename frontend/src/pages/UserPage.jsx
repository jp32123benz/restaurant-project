import React, { useEffect, useRef } from 'react';

// { fetchData }
function UserPage() {
    return (
        <>
            <div>User Page</div>
        </>
    )
    // const containerRef = useRef();

    // useEffect(() => {
    //     const options = {
    //         root: null, // Use the viewport as the root
    //         rootMargin: '0px',
    //         threshold: 0.5, // Trigger when 50% of the element is visible
    //     };

    //     const observer = new IntersectionObserver((entries) => {
    //         if (entries[0].isIntersecting) {
    //             // Load more data when the element is in the viewport
    //             fetchData();
    //         }
    //     }, options);

    //     // Start observing the container element
    //     if (containerRef.current) {
    //         observer.observe(containerRef.current);
    //     }

    //     // Clean up the observer when the component unmounts
    //     return () => {
    //         observer.disconnect();
    //     };
    // }, [fetchData]);

    // return (
    // <div ref={containerRef}>
    //     {/* Render your data here */}
    // </div>
    // );
}

export default UserPage;
