import React from 'react'

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>

            {/*
                postData.map(entry=>(
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        userName={entry.user}
                    />
                ))
            *}
            
        </div>
    )
}

export default Feed
