import React, { Component } from 'react';

/**
 * A short description of the object
 */
export default class ObjectDescription extends Component{
  render() {
    const styles = this.props.styles;
    console.log(styles);
    const object = this.props.object;
    switch (typeof object){
      case 'number':
        return (<span className="ObjectInspector-object-value-number" style={styles.object.value.number}>{object}</span>);
      case 'string':
        return (<span className="ObjectInspector-object-value-string" style={styles.object.value.string}>&quot;{object}&quot;</span>);
      case 'boolean':
        return (<span className="ObjectInspector-object-value-boolean" style={styles.object.value.boolean}>{String(object)}</span>); // why simple {object} won't work?
      case 'undefined':
        return (<span className="ObjectInspector-object-value-undefined" style={styles.object.value.undefined}>undefined</span>);
      case 'object':
        if(object === null){
          return (<span className="ObjectInspector-object-value-null" style={styles.object.value.null}>null</span>)
        }
        if(Array.isArray(object)){
          return (<span>{`Array[${object.length}]`}</span>);
        }
        return (<span className="ObjectInspector-object-value-object" style={styles.object.value.object}>Object</span>);
      case 'function':
        return (<span>
                  <span className="ObjectInspector-object-value-function-keyword" style={styles.object.value.function.keyword}>function</span>
                  <span className="ObjectInspector-object-value-function-name" style={styles.object.value.function.name}>&nbsp;{object.name}()</span>
                </span>);
      case 'symbol':
        return (<span className="ObjectInspector-object-value-symbol" style={styles.object.value.symbol}>Symbol()</span>)
      default:
        return (<span></span>);
    }
  }
}
