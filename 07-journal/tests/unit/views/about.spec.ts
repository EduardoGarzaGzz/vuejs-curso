import About            from '@/views/About.vue';
import { shallowMount } from '@vue/test-utils';

describe( 'Test View: About.vue', function() {
    it( 'debe de renderizar el componente correctamente', () => {
        const wrapper = shallowMount( About );
        expect( wrapper.html() ).toMatchSnapshot();
    } );
} );
