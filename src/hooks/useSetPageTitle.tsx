import { useEffect } from 'react';

const useSetPageTitle = (defaultPageTitle?:string) => {
  const defaultTitle = 'Hi Chat';

  const setPageTitleHandler = (title?:string) => {
    const additional = title ? ` - ${title}` : '';

    document.title = `${defaultTitle}${additional}`;
  };

  useEffect(() => {
    setPageTitleHandler(defaultPageTitle);
  }, []);

  return { setPageTitleHandler };
};

export default useSetPageTitle;
