// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uNxv2NFifzUHnvGHuxCCRo
// Component: cKaSM5MZGd
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_toolpad_landing_page.module.css"; // plasmic-import: uNxv2NFifzUHnvGHuxCCRo/projectcss
import sty from "./PlasmicBigBenefit.module.css"; // plasmic-import: cKaSM5MZGd/css

export type PlasmicBigBenefit__VariantMembers = {};

export type PlasmicBigBenefit__VariantsArgs = {};
type VariantPropType = keyof PlasmicBigBenefit__VariantsArgs;
export const PlasmicBigBenefit__VariantProps = new Array<VariantPropType>();

export type PlasmicBigBenefit__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
};

type ArgPropType = keyof PlasmicBigBenefit__ArgsType;
export const PlasmicBigBenefit__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2"
);

export type PlasmicBigBenefit__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultBigBenefitProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  className?: string;
}

export const defaultBigBenefit__Args: Partial<PlasmicBigBenefit__ArgsType> = {};

function PlasmicBigBenefit__RenderFunc(props: {
  variants: PlasmicBigBenefit__VariantsArgs;
  args: PlasmicBigBenefit__ArgsType;
  overrides: PlasmicBigBenefit__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultBigBenefit__Args, props.args);
  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.column__k1EWr)}>
        <div className={classNames(projectcss.all, sty.freeBox___6RlIp)}>
          {p.renderPlasmicSlot({
            defaultContents: "Import and export ESM",
            value: args.slot,
            className: classNames(sty.slotTargetSlot)
          })}
        </div>

        <div className={classNames(projectcss.all, sty.freeBox___4YdkJ)}>
          {p.renderPlasmicSlot({
            defaultContents:
              "Gain the speed of low-code with the flexibility of React code. MUI Toolpad is an open-source platform ideal to build internal tools and simple apps.",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.column__mpS8S)}>
        <div className={classNames(projectcss.all, sty.freeBox__qg21V)}>
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__p4C3C)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/toolpad_landing_page/images/screenshot20220512At112620PMpng.png",
                  fullWidth: 984,
                  fullHeight: 600,
                  aspectRatio: undefined
                }}
              />
            ),

            value: args.slot2
          })}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBigBenefit__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBigBenefit__VariantsArgs;
    args?: PlasmicBigBenefit__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBigBenefit__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBigBenefit__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBigBenefit__ArgProps,
      internalVariantPropNames: PlasmicBigBenefit__VariantProps
    });

    return PlasmicBigBenefit__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBigBenefit";
  } else {
    func.displayName = `PlasmicBigBenefit.${nodeName}`;
  }
  return func;
}

export const PlasmicBigBenefit = Object.assign(
  // Top-level PlasmicBigBenefit renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicBigBenefit
    internalVariantProps: PlasmicBigBenefit__VariantProps,
    internalArgProps: PlasmicBigBenefit__ArgProps
  }
);

export default PlasmicBigBenefit;
/* prettier-ignore-end */