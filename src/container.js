import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const TEMPLATE = [['core/columns', { backgroundColor: 'yellow', verticalAlignment: 'center' }, [
    ['core/column', { templateLock: 'all' }, [
        ['core/image'],
    ]],
    ['core/column', { templateLock: 'all' }, [
        ['read-more-plugin/read-more-block', { placeholder: 'Enter side content...' }],
    ]],
]]];


registerBlockType('my-first-block/read-more-container-block', {
    title: __('Container', 'read-more-block'),
    category: 'design',

    /**
     * @see ./edit.js
     */
    edit({ className }) {

        return (
            <div className={className}>
                <InnerBlocks
                    template={TEMPLATE}
                    templateLock="all"
                />
            </div>
        )
    },

    /**
     * @see ./save.js
     */
    save() {
        const blockProps = useBlockProps.save();
        return (
            <div {...blockProps}>
                <InnerBlocks.Content />
            </div>
        )
    },
});