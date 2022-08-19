import React, { forwardRef } from 'react';
import ErrorBoundary from '~/components/common/ErrorBoundary';

const withErrorBoundary = (WrappedComponent) => {
    return forwardRef((props, ref) => {
        return (
            <ErrorBoundary>
                <WrappedComponent {...props} ref={ref} />
            </ErrorBoundary>
        );
    });
};

export default withErrorBoundary;
