/**
 * The component abstract class.
 * All game objects are made up of components.
 * Components are in charge of drawing and updating game objects
 * 
 * You should never direct instantiate Component, i.e. you shouldn't do
 * `new Component`. Instead you should extend Component, i.e.,
 * `class SlugUpdaterComponent extends Component`
 * 
 * The `parent` field should point to the game object that is the parent of
 * this component. To make sure that parent is always set, you should never directly
 * add a component to a game object's list of components. Instead use game object`s
 * `addComponent` function.
 * 
 * To match the Unity API, we have getter `transform` that returns
 * the first transform in the component's parent, which should always be an instance 
 * of the class `Transform`
 */
class Component {
    /** Reference to the parent game object */
    parent = null 

    /** Property to get the parent's transform component */
    get transform() {
        return this.parent.transform;
    }
}

window.Component = Component