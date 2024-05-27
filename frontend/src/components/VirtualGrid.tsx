import {useVirtualizer} from "@tanstack/react-virtual";


import React, {useCallback} from "react";


export function MasonryVerticalVirtualizerVariable({rows}: { rows: any[] }) {
    const parentRef = React.useRef(null)

    const getRandomHeight = () => {
        return Math.floor(Math.random() * 100) + 150
    }

    const rowVirtualizer = useVirtualizer({
        count: rows.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => getRandomHeight(),
        overscan: 5,
        lanes: 4,
    })

    const virtualizedElement  = useCallback((virtualItem: any, index: any) => {
            return (
                <div
                    key={index}
                    data-index={index}
                    className={virtualItem.index % 2 ? 'ListItemOdd' : 'ListItemEven'}
                    style={{
                        transform: `translateY(${virtualItem.start}px)`,
                        position: 'absolute',
                        top: 0,
                        left: `${virtualItem.lane * 25}%`,
                        width: '25%',
                        height: `${virtualItem.size}px`,
                        padding: '10px',
                    }}
                >
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: rows[virtualItem.index]['název']['cs'].includes("Oznámení") ? '#D266A7' : '#E6F491',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                        padding: '10px'
                    }}>
                        <a href={rows[virtualItem.index]['url']} target={'_blank'}>
                            <div style={{
                                display: 'flex',
                                flexFlow: 'column',
                                height: '100%'
                            }}>
                                <span>
                                    {rows[virtualItem.index]['název']['cs']}
                                </span>

                                <span style={{
                                    marginTop: 'auto',
                                    marginLeft: 'auto',
                                }}>
                                        {rows[virtualItem.index]['vyvěšení']['datum']}
                                </span>
                            </div>
                        </a>
                    </div>
                </div>

            )
    }, [rows])

    return (
        <>
            <div
                ref={parentRef}
                className="List"
                style={{
                    margin: '0 auto',
                    height: `800px`,
                    width: `1200px`,
                    overflow: 'auto',
                    marginTop: 100,
                    backgroundImage: 'url(/public/bg.jpg)',
                    backgroundSize: 'cover',
                    paddingTop: '120px'
                }}
            >
                <div
                    style={{
                        height: `${rowVirtualizer.getTotalSize()}px`,
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    {rowVirtualizer.getVirtualItems().map((virtualItem, index) => {
                        return virtualizedElement(virtualItem, index)
                    })}
                </div>
            </div>
        </>
    )
}