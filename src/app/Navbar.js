import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
    fetchNotifications,
    selectAllNotifications,
} from '../features/notifications/notificationsSlice'
import ItemWithTooltip from "../components/ItemWithTooltip/ItemWithTooltip";

export const Navbar = () => {
    const dispatch = useDispatch()
    const notifications = useSelector(selectAllNotifications)
    const numUnreadNotifications = notifications.filter((n) => !n.read).length

    const fetchNewNotifications = () => {
        dispatch(fetchNotifications())
    }

    let unreadNotificationsBadge

    if (numUnreadNotifications > 0) {
        unreadNotificationsBadge = (
            <span className="badge">{numUnreadNotifications}</span>
        )
    }

    return (
        <nav>
            <section>
                <h1>Redux Essentials Example</h1>

                <div className="navContent">
                    <div className="navLinks">
                        <ItemWithTooltip tooltipContent={<div>
                            Press here to see all your posts.
                            <br />
                            New and old! Hurry up!
                        </div>}>
                            <Link to="/">Posts</Link>
                        </ItemWithTooltip>
                        <ItemWithTooltip tooltipContent={<div>If you click here users will appear!</div>}>
                            <Link to="/users">Users</Link>
                        </ItemWithTooltip>
                        <ItemWithTooltip tooltipContent={<div>Here are notifications! Look them, grab them, throw away them!</div>}>
                            <Link to="/notifications">
                                Notifications {unreadNotificationsBadge}
                            </Link>
                        </ItemWithTooltip>

                    </div>

                    <button className="button" onClick={fetchNewNotifications}>
                        Refresh Notifications
                    </button>
                </div>
            </section>
        </nav>
    )
}
