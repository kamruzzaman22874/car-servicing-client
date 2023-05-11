import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { authContext } from '../../providers/AuthProviders';
import BookingRow from './BookingRow';

const Bookings = () => {
	const { user } = useContext(authContext);
	const [bookings, setBookings] = useState([]);
	const url = `http://localhost:5000/bookings?email=${user?.email}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setBookings(data));
	}, [url]);
	const handleDelete = (id) => {
		const proceed = confirm('Are you sure you want to delete');
		if (proceed) {
			fetch(`http://localhost:5000/bookings/${id}`, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
					}
				});
		}
    };
    const handleBookingConfirm = (id) => {
		fetch(`http://localhost:5000/bookings/${id}`, {
			method: 'PATCH',
			headers: {
				'content-type' : 'application/json'
			},
			body: JSON.stringify({status: 'confirm'})

		})
		.then(res => res.json())
			.then(data => {
				if (data.modifiedCount > 0) {
					// update status 
					const remaining = bookings.filter(booking => booking._id !== id)
					const updated = bookings.find(booking => booking._id === id);
					updated.status = 'confirm'
					const newBookings = [updated, ...remaining];
					setBookings(newBookings)
				}
		})
    }
	return (
		<div className='overflow-x-auto w-full'>
			<table className='table w-full'>
				{/* head */}
				<thead>
					<tr>
						<th>
							<label>
								<input type='checkbox' className='checkbox' />
							</label>
						</th>
						<th>image</th>
						<th>Service</th>
						<th>Date</th>
						<th>Price</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{bookings.map((booking) => (
						<BookingRow
							key={booking._id}
							booking={booking}
							handleBookingConfirm={handleBookingConfirm}
							handleDelete={handleDelete}></BookingRow>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Bookings;
