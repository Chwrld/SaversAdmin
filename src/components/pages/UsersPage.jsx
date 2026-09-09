import PageHeading from '../ui/PageHeading'
import Status from '../ui/Status'
import TableShell from '../ui/TableShell'
import { users } from '../../data'

export default function UsersPage() {
  return (
    <>
      <PageHeading
        title="User Management"
        description="Consumer accounts that contribute crowdsourced price observations."
      />
      <TableShell title="Consumers" count="48 accounts" search="Search by name, email or ID">
        <div className="data-table users-table">
          <div className="table-row table-head">
            <span>User ID</span>
            <span>Name</span>
            <span>Status</span>
            <span>Price reports</span>
            <span>Registered</span>
            <span>Last activity</span>
            <span>Actions</span>
          </div>
          {users.map(([id, name, email, status, reports, registered, activity]) => (
            <div className="table-row" key={id}>
              <span>{id}</span>
              <span><strong>{name}</strong><small>{email}</small></span>
              <span><Status>{status}</Status></span>
              <span>{reports}</span>
              <span>{registered}</span>
              <span>{activity}</span>
              <span className="row-actions">
                <button>View</button>
                <button>{status === 'Active' ? 'Deactivate' : 'Activate'}</button>
                <button>Suspend</button>
                <button className="danger">Delete</button>
              </span>
            </div>
          ))}
        </div>
      </TableShell>
    </>
  )
}
