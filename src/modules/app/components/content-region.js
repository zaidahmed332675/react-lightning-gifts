// NPM Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Component Dependencies
import ErrorBoundary from 'components/error-boundary';

/**
 * Content Region Component
 */
const ContentRegion = props => (
    <div>
        <ErrorBoundary>
            {props.children}
        </ErrorBoundary>
    </div>
);

/**
 * Component Prop Types
 */
ContentRegion.propTypes = {
    children: PropTypes.node.isRequired
};

export default ContentRegion;
