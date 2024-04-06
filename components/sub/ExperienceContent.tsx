import { UserIcon } from "@heroicons/react/20/solid";

const timeline = [
  {
    id: 1,
    content: "Internship",
    target: "Front End Developer at Suretybond.co.id",
    href: "#",
    date: "Jun 2023 - Sep 2023",
    datetime: "Jun 2023 - Sep 2023",
    icon: UserIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 2,
    content: "Internship",
    target: "Front End Developer at ALL DATA INTERNATIONAL",
    href: "#",
    date: "Apr 2023 - Jun 2023",
    datetime: "Apr 2023 - Jun 2023",
    icon: UserIcon,
    iconBackground: "bg-green-500",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const WorkExp = () => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-7 h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex flex-col sm:flex-row sm:items-center space-x-0 sm:space-x-3">
                <div className="ml-4 mb-3 sm:mb-0 flex items-center space-x-4">
                  <span
                    className={classNames(
                      event.iconBackground,
                      "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{" "}
                      <a
                        href={event.href}
                        className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex-1 sm:min-w-0 sm:flex-grow justify-between">
                  <div className="whitespace-nowrap text-right text-sm text-gray-500 mr-3">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExp;
