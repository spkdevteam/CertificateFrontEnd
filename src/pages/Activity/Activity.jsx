import React from 'react'
import DailyActivity from './DailyActivity'

const activitylog = [
    {
        name: 'sandeep',
        dateTime: '2025-02-01T00:00:10Z',
        status: "yellow",
        activity: 'Wake up',
        api: '/path/to/route/the/component'
    },
    {
        name: 'sandeep',
        dateTime: '2025-03-02T07:30:00Z',
        status: "green",
        activity: 'Breakfast',
        api: '/path/to/route/the/component'
    },
    {
        name: 'sandeep',
        dateTime: '2025-04-03T08:45:30Z',
        status: "red",
        activity: 'Dress up',
        api: '/path/to/route/the/component'
    },
    {
        name: 'sandeep',
        dateTime: '2025-05-04T09:15:00Z',
        status: "gray",
        activity: 'Bike started',
        api: '/path/to/route/the/component'
    },
    {
        name: 'sandeep',
        dateTime: '2025-06-05T10:00:00Z',
        status: "blue",
        activity: 'Reached Office',
        api: '/path/to/route/the/component'
    },
    {
        name:"sandeep",
        dateTime:"2024-05-06T10:00:00Z",
        status:"yellow",
        activity:"Taking Lunch",
        api:"/path/to/route/the/component"
    },
    {
        name:"sandeep",
        dateTime:"2023-05-06T10:00:00Z",
        status:"blue",
        activity:"Doing My Work",
        api:"/path/to/route/the/component"
    },
    {
        name:"sandeep",
        dateTime:"2022-05-06T10:00:00Z",
        status:"green",
        activity:"Tea Break",
        api:"/path/to/route/the/component"
    }


];

function Activity() {
  return (
    <div>
        <DailyActivity activitylog={activitylog}/>
      
    </div>
  )
}

export default Activity
