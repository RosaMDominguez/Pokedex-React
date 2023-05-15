export type ServiceType<P> = ServiceInit | ServiceLoading | ServiceLoaded<P> | ServiceError;

interface ServiceInit {
    status: 'init';
  }
  
  interface ServiceLoading {
    status: 'loading';
  }
  
  export interface ServiceLoaded<P> {
    status: 'loaded';
    payload: P;
  }
  interface ServiceError {
    status: 'error';
    error: Error;
  }