import React, { ReactNode } from 'react'

type PageContainerProps = {
    children: ReactNode;
  };

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      {children}
    </div>
  );
};

export default PageContainer;