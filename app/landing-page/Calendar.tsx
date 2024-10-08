export const Calendar = () => {
    return (
        <div className="md:p-8 p-5 dark:bg-[#F6F6F6] bg-white">
            <h1 className="font-8xl text-center">Select Date and Time</h1>
            <div className="flex items-center justify-center mt-8">
                <button aria-label="calendar backward" className="focus:text-gray-400 mr-3 hover:text-gray-400 text-gray-800 dark:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                </button>

                <span tabIndex={0} className="focus:outline-none text-base dark:text-black text-gray-800">October 2020</span>

                <button aria-label="calendar forward" className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </button>

            </div>
            <div className="flex items-center justify-between pt-4 overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>
                                <div className="w-full flex justify-center">
                                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-transparent">Mon</p>
                                </div>
                            </th>
                            <th>
                                <div className="w-full flex justify-center">
                                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-transparent">Tue</p>
                                </div>
                            </th>
                            <th>
                                <div className="w-full flex justify-center">
                                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-transparent">Wed</p>
                                </div>
                            </th>
                            <th>
                                <div className="w-full flex justify-center">
                                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-transparent">Thu</p>
                                </div>
                            </th>
                            <th>
                                <div className="w-full flex justify-center">
                                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-transparent">Fri</p>
                                </div>
                            </th>
                            <th>
                                <div className="w-full flex justify-center">
                                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-transparent">Sat</p>
                                </div>
                            </th>
                            <th>
                                <div className="w-full flex justify-center">
                                    <p className="text-base font-medium text-center text-gray-800 dark:text-gray-transparent">Sun</p>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="pt-6">
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                            </td>
                            <td className="pt-6">
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                            </td>
                            <td className="pt-6">
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">1</p>
                                </div>
                            </td>
                            <td className="pt-6">
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">2</p>
                                </div>
                            </td>
                            <td className="pt-6">
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black">3</p>
                                </div>
                            </td>
                            <td className="pt-6">
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black">4</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">5</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">6</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">7</p>
                                </div>
                            </td>
                            <td>
                                <div className="w-full h-full">
                                    <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                        <a role="link" tabIndex={0} className="text-base w-8 h-8 flex items-center justify-center font-medium text-white rounded-full" style={{ 'background': 'linear-gradient(265.67deg, #87D06A 46.48%, #AEE77E 89.99%)' }}>8</a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">9</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black">10</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black">11</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">12</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">13</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">14</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">15</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">16</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black">17</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black">18</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">19</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">20</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">21</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">22</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">23</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black">24</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black">25</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">26</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">27</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">28</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">29</p>
                                </div>
                            </td>
                            <td>
                                <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-black font-medium">30</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}