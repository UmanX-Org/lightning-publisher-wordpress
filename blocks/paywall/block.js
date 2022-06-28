(function(blocks, editor, i18n, element, components, _, blockEditor) {
  var __ = i18n.__;
  var el = element.createElement;
  var TextControl = components.TextControl;
  var useBlockProps = blockEditor.useBlockProps;
  var BlockControls = blockEditor.BlockControls;

  blocks.registerBlockType('alby/paywall', {
    attributes: {
      amount: {
        type: 'number',
      },
      button_text: {
        type: 'string',
      }
    },
    edit: function(props) {
      const {
        amount,
        button_text
      } = props.attributes;
      return el(
        'div',
        useBlockProps({
          className: props.className
        }),
        el(
          BlockControls, {
            key: 'controls'
          },
        ),
        el(
          TextControl, {
            label: __("Amount", "alby"),
            onChange: (v) => {
              props.setAttributes({
                amount: parseInt(v)
              })
            },
            value: amount || 1000,
          }
        ),
        el(
          TextControl, {
            label: __("Button Label", "alby"),
            onChange: (v) => {
              props.setAttributes({
                button_text: v
              })
            },
            value: button_text || 'Pay now',
          }
        ),
        el('hr', {
          className: "lnp-alby-paywall-widget"
        })
      );

    },
    save: function(props) {
      return null;
    },
  });
})(
  window.wp.blocks,
  window.wp.editor,
  window.wp.i18n,
  window.wp.element,
  window.wp.components,
  window._,
  window.wp.blockEditor
);
