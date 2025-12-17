export default function UserListPage() {
  const users = [
    {
      id: 1,
      name: "John Michael",
      email: "john@creative-tim.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      function: "Manager",
      subFunction: "Organization",
      status: "ONLINE",
      employed: "23/04/18"
    },
    {
      id: 2,
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alexa",
      function: "Programator",
      subFunction: "Developer",
      status: "OFFLINE",
      employed: "11/01/19"
    },
    {
      id: 3,
      name: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laurent",
      function: "Executive",
      subFunction: "Projects",
      status: "ONLINE",
      employed: "19/09/17"
    },
    {
      id: 4,
      name: "Michael Levi",
      email: "michael@creative-tim.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      function: "Programator",
      subFunction: "Developer",
      status: "ONLINE",
      employed: "24/12/08"
    },
    {
      id: 5,
      name: "Richard Gran",
      email: "richard@creative-tim.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Richard",
      function: "Manager",
      subFunction: "Executive",
      status: "OFFLINE",
      employed: "04/10/21"
    },
    {
      id: 6,
      name: "Miriam Eric",
      email: "miriam@creative-tim.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Miriam",
      function: "Programator",
      subFunction: "Developer",
      status: "OFFLINE",
      employed: "14/09/20"
    }
  ];
  return <div className="px-5">
    <div className="bg-white h-auto rounded-[15px]">
      <h1 className="p-5 font-medium">USER LIST</h1>
      <table className="w-full px-4">
        <thead>
          <tr className="border-b border-gray-200 px-4 py-2">
            <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Function
            </th>
            <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Employed
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={`${index !== users.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50 transition-colors`}
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">
                      {user.name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {user.email}
                    </div>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4">
                <div>
                  <div className="font-medium text-gray-700 text-sm">
                    {user.function}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {user.subFunction}
                  </div>
                </div>
              </td>

              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold ${user.status === 'ONLINE'
                    ? 'bg-green-400 text-white'
                    : 'bg-gray-300 text-gray-600'
                  }`}>
                  {user.status}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="text-gray-700 text-sm font-medium">
                  {user.employed}
                </div>
              </td>

              <td className="px-6 py-4 text-right">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>;
}