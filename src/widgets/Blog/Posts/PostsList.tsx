import { Page, PostListItem } from "@sssh-fresh-code/types-sssh";
import { getDate } from "../../../shared/util/date.util";
import { UseQueryResult } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import Pagination from "../../../shared/component/Paging/Pagination";

interface PostsListProps {
  query: UseQueryResult<Page<PostListItem>>;
  pageName?: string;
}

export default function PostsList(
  { query, pageName }: PostsListProps
) {
  const { isSuccess, data } = query;

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-full max-w-3xl justify-center items-center">
          <Search />
          {
            isSuccess && data && (
              data.data.map((post) => (
                <div className="group relative overflow-hidden rounded-lg w-full hover:bg-gray-200">
                  <div className="flex h-full flex-col justify-between gap-4 p-4 transition-all ">
                    <div>
                      <Link to={`/topics/${post.topic.name}`}>
                        <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-primary hover:underline">
                          {post.topic.name}
                        </span>
                      </Link>
                      <Link to={`/posts/${post.title}`}>
                        <h3 className="mt-2 text-lg font-semibold leading-tight hover:underline">{post.title}</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400 hover:underline">
                          {post.description}
                        </p>
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>{getDate(new Date(post.createdAt))}</span>
                      <span className="mx-2 h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                      {
                        post.series && (
                          <Link to={`/series/${post.series.id}`}>
                            <span>시리즈: <span className="hover:underline">{post.series.name}</span></span>
                          </Link>
                        )
                      }
                    </div>
                  </div>
                </div>
              ))
            )
          }

          {
            isSuccess && data && (
              <Pagination current={data.info.current} lastPage={data.info.last} pageName={pageName} />
            )
          }
        </div>
      </div>
    </>
  )
}

function Search() {
  return <div className="space-y-4 w-full">
    <div className="flex justify-center items-center gap-4">
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
        placeholder="검색할 단어를 입력하세요"
        type="search" />
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
        <SearchIcon />
      </button>
    </div>
  </div>;
}

function SearchIcon() {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="w-5 h-5"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.3-4.3"></path>
  </svg>;
}
